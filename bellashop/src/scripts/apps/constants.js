const CONSTANTS = new function () {
    this.NAVIGATION_URL = new function () {
        this.ROOT_FILE = "";
        this.LOGIN = this.ROOT_FILE + '/login';
        this.HOME = this.ROOT_FILE + '/';
        this.NOT_FOUND = this.ROOT_FILE + '/not-found';
    }
    this.SIDEBAR_PAGEID = new function () {
        return {
            NONE: -1
        }
    }
};

export default CONSTANTS;