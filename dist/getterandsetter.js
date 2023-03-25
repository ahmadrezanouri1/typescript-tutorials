"use strict";
class Account32 {
    constructor(id, username, liked, _user_id) {
        this.id = id;
        this.username = username;
        this.liked = liked;
        this._user_id = _user_id;
    }
    like(likepluss) {
        this.liked += 1;
    }
    get user_id() {
        return this._user_id;
    }
    set setUser_id(value) {
        this._user_id = value;
    }
}
const account13 = new Account32(2, 'ali', 0, 7754854);
account1.like(true);
console.log(account13.user_id);
account13.setUser_id = 8434873;
console.log(account13.user_id);
//# sourceMappingURL=getterandsetter.js.map