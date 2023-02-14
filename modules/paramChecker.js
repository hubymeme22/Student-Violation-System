// A simple parameter request.body parameter checker
// inspired from implementation of Lance Crisang in action api
// By: Hubert F. Espinola I

// checks if all the provided parameters are set
// and returns a boolean if all the params that are needed are set.
export default function paramCheck(reqBody, paramNameList) {
    let status = true;
    paramNameList.forEach((parameter) => {
        if (reqBody[parameter] == null) {
            status = false;
            return;
        }
    });

    return status;
}