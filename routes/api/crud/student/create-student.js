import { Router } from "express";
import { validatePOST } from "../../../../middleware/tokenValidator.js";
import { SecuredMongoDBConnection } from "../../../../modules/DBConnection.js";
import paramCheck from "../../../../modules/paramChecker.js";

const createStudent = Router();
createStudent.post('/', validatePOST, (req, res) => {
    // this route must only be accessed by the admin and no other else
    const responseFormat = {
        'error': '',
        'status': ''
    };

    // status: created - the new account is created
    // status: not_created - the new account is not created due to some error
    if (req.allowedData.accountAccess != 'admin') {
        responseFormat.error = 'InvalidAccess';
        responseFormat.status = 'not_created';

        return res.json(responseFormat).status(403);
    }

    // otherwise, this must be admin
    // note: birthdate parser will be added soon
    if (paramCheck(req.body, [
        'username', 'email', 'adviser',
        'contact', 'sex',
        'firstname', 'middlename', 'lastname',
        'fatherfullname', 'fathercontact',
        'motherfullname', 'mothercontact'])) {

        // generate a format for the data
        const rbody = req.body;
        const schemaFormat = {
            username: rbody.username,
            email: rbody.email,
            password: rbody.password,
            adviser: rbody.adviser,

            studentDetails: {
                contact: rbody.contact,
                // will be updated soon
                birthDate: new Date(),
                sex: rbody.sex,

                fullName: {
                    first: rbody.firstname,
                    middle: rbody.middlename,
                    last: rbody.lastname
                },

                familyContact: {
                    fatherFullName: rbody.fatherfullname,
                    fatherContactNumber: rbody.fathercontact,
                    motherFullName: rbody.motherfullname,
                    motherContactNumber: rbody.mothercontact,

                    // will be updated soon
                    guardianFullName: 'sample',
                    guardianContactNumber: 'sample'
                },
                violations: []
            }
        }

        // generate an instance of secured connection
        const securedDB = new SecuredMongoDBConnection(req.allowedData);
        securedDB.setAcceptCallback((userdata) => {
            // meaning, this account already exists
            if (Object.keys(userdata).length == 0) {
                responseFormat.error = 'student_exists';
                responseFormat.status = 'not_created';
                return res.json(responseFormat);
            }

            responseFormat.status = 'created';
            res.json(responseFormat);
        });

        securedDB.setRejectCallback((error) => {
            console.log(error);
            responseFormat.status = 'not_created';
            responseFormat.error = error;
            res.json(responseFormat).status(400);
        });

        securedDB.createStudent(schemaFormat);
    }

});

export default createStudent;