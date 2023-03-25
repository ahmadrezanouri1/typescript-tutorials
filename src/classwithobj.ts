// how fiend class 
class Account {
    id:number;
    // access modifair public/private/protected
     private _user_id:number;
    username:string;
    liked:number;

    // constructor  is a method in class for intial data
    constructor(id:number,username:string,liked:number,_user_id:number){
        this.id=id;
        this.username=username;
        this._user_id=_user_id
        this.liked = liked;
    }   

    // this  a method of class Account
    like(likepluss:boolean){
        this.liked+=1;
    }
}


// create a object with a class
let account1= new Account(2,'ali',0,7754854)
// call a method of obj of class
account1.like(true)
// log  a proprty of obj of class 
console.log(account1.liked)


// الگو جدید برای جلوگیری از تکرار

class Account2 {
    // id:number;
    // access modifair public/private/protected
    //  private _user_id:number;
    // username:string;
    // liked:number;

    // constructor  is a method in class for intial data
    constructor(public id:number,public readonly username:string,public liked:number,private _user_id:number){
        // this.id=id;
        // this.username=username;
        // this._user_id=_user_id
        // this.liked = liked;
    }   

    // this  a method of class Account
    like(likepluss:boolean){
        this.liked+=1;
    }
}
