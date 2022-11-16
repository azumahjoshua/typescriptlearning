"use strict";
class User {
    constructor(email, name) {
        this._courseCount = 1;
        this.city = "";
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getEmail() {
        return this.email;
    }
    get get_courseCount() {
        return this._courseCount;
    }
    set set_courseCount(courseNumber) {
        this._courseCount = courseNumber;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        super._courseCount = 2;
    }
}
const azumah = new User('someone@gmail.com', 'azumah');
azumah.city = "Obuasi";
