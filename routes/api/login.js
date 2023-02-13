import { Router } from "express";
import jwt from "jsonwebtoken";

import MongoDBConnection from "../../modules/DBConnection.js"
import paramCheck from "../../modules/paramChecker.js";

const DBConnection = new MongoDBConnection();
const login = Router();

login.post('/', (req, res) => {
    const responseFormat = {
        'loggedIn': false,
        'existingEmail': false,
        'error': 'param_not_set',
        'token': null
    };

    // bad request error
    if (!paramCheck(req.body, ['username', 'password']))
        return res.json(responseFormat).status(400);

    // checks the email's existence and password matching
    DBConnection.setAcceptCallback((userdata) => {
        if (userdata == null) {
            responseFormat['error'] = null;
            return res.json(responseFormat);
        }

        responseFormat['error'] = null;
        responseFormat['existingEmail'] = true;

        // adjust the response values when logged in
        if (userdata.password == req.body.password) {
            // generate a token without the actual password in it
            userdata['password'] = 'secret';

            responseFormat['token'] = jwt.sign({userdata}, process.env.SECRET_KEY);
            responseFormat['loggedIn'] = true;
        }

        res.json(responseFormat);
    });

    DBConnection.setRejectCallback((error) => {
        responseFormat['error'] = error;
        res.json(responseFormat);
    });

    DBConnection.checkUsername(req.body.username);
});

export default login;