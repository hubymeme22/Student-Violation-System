import jwt from "jsonwebtoken";
import paramCheck from "../modules/paramChecker.js";
import 'dotenv/config';

const secretKey = process.env.SECRET_KEY;

// validates the token through the use of cookies
export function validateGET(req, res, next) {
    if (!paramCheck(req.cookies, ['token']))
        return res.json({ 'error': 'param_not_set' }).status(400);

    try {
        // check if this is signed
        const userdata = jwt.verify(req.cookies.token, secretKey);
        req.allowedData = userdata;
        next();
    } catch (error) {
        console.log(error);
        return res.json({ 'error': 'invalid_token' }).status(403);
    }
}

// validates token sent through req.body
export function validatePOST(req, res, next) {
    if (!paramCheck(req.body, ['token']))
        return res.json({ 'error': 'param_not_set' }).status(400);

    try {
        // check if this is signed
        const userdata = jwt.verify(req.body.token, secretKey);
        req.allowedData = userdata;
        next();
    } catch (error) {
        return res.json({ 'error': 'invalid_token' }).status(403);
    }
}