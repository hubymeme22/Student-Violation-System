import { Router } from "express";

const login = Router();
login.post('/', (req, res) => {
    const username = req.username;
    const password = req.password;

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