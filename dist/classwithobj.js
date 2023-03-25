"use strict";
class Account {
    constructor(id, username, liked, _user_id) {
        this.id = id;
        this.username = username;
        this._user_id = _user_id;
        this.liked = liked;
    }
    like(likepluss) {
        this.liked += 1;
    }
}
let account1 = new Account(2, 'ali', 0, 7754854);
account1.like(true);
console.log(account1.liked);
class Account2 {
    constructor(id, username, liked, _user_id) {
        this.id = id;
        this.username = username;
        this.liked = liked;
        this._user_id = _user_id;
    }
    like(likepluss) {
        this.liked += 1;
    }
}
//# sourceMappingURL=classwithobj.js.map