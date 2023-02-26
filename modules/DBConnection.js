/*
*   A simple class specifically made for performing CRUD operation
*   for the Student Violation System.
*   By: Hubert F. Espinola I
*/
import Account from '../models/account.js';
import Student from '../models/student.js';

// contains public-accessible operations on the server
export class MongoDBConnection {
    constructor() {
        this.acceptCallback;
        this.rejectCallback;

        this.acbFormat = (userData) => {};
        this.rcbFormat = (error) => {};
    }

    // sets callback for: when a method below was successfully executed
    setAcceptCallback(callback=this.acbFormat) {
        this.acceptCallback = callback;
    }

    // sets callback for: when database failed to do the method below
    setRejectCallback(callback=this.rcbFormat) {
        this.rejectCallback = callback;
    }

    // checks for existence of email on account collection
    // (accountData = null) - Username does not exist
    // (accountData = {...}) - Username does exist
    checkUsername(username) {
        Account.findOne({ 'username': username })
            .then(this.acceptCallback)
            .catch(this.rejectCallback);
    }
}

// Implementation that requires tokens before executing operations
export class SecuredMongoDBConnection extends MongoDBConnection {

    // added verified json for filtering
    constructor(userVerifiedJSON) {
        super();
        this.userJSON = userVerifiedJSON;
    }

    // saves a new faculty account
    signUpFaculty(username, password) {
        const addAccount = new Account({
            'username': username,
            'password': password,
            'accountAccess': 'faculty'
        });

        addAccount.save()
            .then(this.acceptCallback)
            .catch(this.rejectCallback);
    }

    // saves a new admin faculty account
    signUpAdmin(username, password) {
        const addAccount = new Account({
            'username': username,
            'password': password,
            'accountAccess': 'admin'
        });

        addAccount.save()
            .then(this.acceptCallback)
            .catch(this.rejectCallback);
    }

    // gets the student summary details
    getStudentSummary() {
        if (this.userJSON.accountAccess != "admin") {
            Student.find({ adviser: this.userJSON.username }).select('username email details.fullname')
                .then(this.acceptCallback)
                .catch(this.rejectCallback);
        } else {
            Student.find().select('username email details.fullname')
                .then(this.acceptCallback)
                .catch(this.rejectCallback);
        }
    }

    // gets all the data on specific student
    getStudentData(username) {
        let query = { username: username };
        if (this.userJSON.accountAccess != "admin")
            query['adviser'] = this.userJSON.username;

        Student.find(query)
            .then(this.acceptCallback)
            .catch(this.rejectCallback);
    }

    ///////////////////////////////
    //  student crud operations  //
    ///////////////////////////////
    createStudent(studentJSONData) {
        if (this.userJSON.accountAccess != 'admin')
            return this.rejectCallback('InvalidPermission');

        Student.find(studentJSONData.username)
            .then((studentData) => {
                if (studentData == null) {
                    const insertStudent = new Student(studentJSONData);
                    insertStudent.save()
                        .then(this.acceptCallback)
                        .catch(this.rejectCallback);
                } else {
                    // this means that there's an existing
                    // student account w/same username
                    this.acceptCallback({});
                }
            })

            .catch(this.rejectCallback)
    }
}