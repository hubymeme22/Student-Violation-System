import { Router } from "express";

const login = Router();
login.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username == 'kenneth' && password == 'Jello123!') {
        res.json({
            'loggedIn': true,
            'existingEmail': true
        });
    } else {
        res.json({
            'loggedIn': false,
            'existingEmail': true
        });
    }
});

export default login;