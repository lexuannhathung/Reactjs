import CONSTANTS from "./constants";

const GLOBAL_FUNCTIONS = new function () {
    this.SetReduxObject = function (newState, action) {
        if (action.data != undefined) {
            let keys = Object.keys(action.data);
            keys.map(k => {
                newState[k] = action.data[k];
            });
        }
        return newState;
    }
    this.CopyObject = function (olbOject) {
        let target = {};
        for (let prop in olbOject) {
            if (olbOject.hasOwnProperty(prop)) {
                target[prop] = olbOject[prop];
            }
        }
        return target;
    }
}

export default GLOBAL_FUNCTIONS;