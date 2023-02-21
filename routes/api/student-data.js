import { Router } from "express";
import { validateGET } from "../../middleware/tokenValidator.js";
import { SecuredMongoDBConnection } from "../../modules/DBConnection.js";

const student = Router();
student.get('/', validateGET, (req, res) => {
    const securedDBConnection = new SecuredMongoDBConnection(req.allowedData);
    const responseFormat = { error: null, data: null };

    securedDBConnection.setAcceptCallback(data => {
        responseFormat.data = data;
        res.json(responseFormat);
    });

    securedDBConnection.setRejectCallback(error => {
        responseFormat.error = error;
        res.json(responseFormat);
    });

    securedDBConnection.getStudentSummary();
});

student.get('/:studentUsername', validateGET, (req, res) => {
    const securedDBConnection = new SecuredMongoDBConnection(req.allowedData);
    const responseFormat = { error: null, data: null };

    securedDBConnection.setAcceptCallback(data => {
        responseFormat.data = data;
        res.json(responseFormat);
    });

    securedDBConnection.setRejectCallback(error => {
        responseFormat.error = error;
        res.json(responseFormat);
    });

    securedDBConnection.getStudentData(req.params.studentUsername);
});

export default student;