

class Account32 {
  

    // constructor  is a method in class for intial data
    constructor(public id:number,
        public readonly username:string,
        public liked:number,
        private _user_id:number){
    }   

    // this  a method of class Account
    like(likepluss:boolean){
        this.liked+=1;
    }

    get user_id(){
        return this._user_id
    }

    set setUser_id(value:number){
         this._user_id = value
    }
}

const account13= new Account32(2,'ali',0,7754854)
// call a method of obj of class
account1.like(true)
// log  a proprty of obj of class 
console.log(account13.user_id)
account13.setUser_id = 8434873;
console.log(account13.user_id)