/*
*   A simple class specifically made for performing CRUD operation
*   for the Student Violation System.
*   By: Hubert F. Espinola I
*/
import Account from '../models/account.js';
import Student from '../models/student.js';

export default class MongoDBConnection {
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
        this.rejectCallbck = callback;
    }

    // checks for existence of email on account collection
    // (accountData = null) - Username does not exist
    // (accountData = {...}) - Username does exist
    checkUsername(username) {
        Account.findOne({ 'username': username })
            .then(this.acceptCallback)
            .catch(this.rejectCallback);
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

    // saves a new faculty account
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
        Student.find().select('username email details.fullname')
            .then(this.acceptCallback)
            .catch(this.rejectCallbck);
    }

    // gets all the data on specific student
    getStudentData(username) {
        Student.find({ username: username })
            .then(this.acceptCallback)
            .catch(this.rejectCallbck);
    }
}