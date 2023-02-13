import Account from '../models/account.js';

class MongoDBConnection {
    constructor() {
        this.acceptCallback;
        this.rejectCallback;

        this.acbFormat = (userData) => {};
        this.rcbFormat = (error) => {};
    }

    setAcceptCallback(callback=this.acbFormat) {
        this.acceptCallback = callback;
    }

    setRejectCallback(callback=this.rcbFormat) {
        this.rejectCallbck = callback;
    }

    // checks for existence of email on account collection
    // (accountData = null) - Username does not exist
    // (accountData = {...}) - Username does exist
    checkUsername(username) {
        Account.findOne({ username: username })
            .then(this.acceptCallback)
            .catch(this.rejectCallback);
    }

    // saves a new faculty account
    signInFaculty(username, password) {
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
    signInAdmin(username, password) {
        const addAccount = new Account({
            'username': username,
            'password': password,
            'accountAccess': 'admin'
        });

        addAccount.save()
            .then(this.acceptCallback)
            .catch(this.rejectCallback);
    }
}

export default MongoDBConnection;