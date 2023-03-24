// how fiend class 
class Account {
    id:number;
    username:string;
    liked:number;

    // constructor  is a method in class for intial data
    constructor(id:number,username:string,liked:number){
        this.id=id;
        this.username=username;
        this.liked = liked;
    }

    // this  a method of class Account
    like(likepluss:boolean){
        this.liked+=1;
    }
}


// create a object with a class
let account1= new Account(2,'ali',0)
// call a method of obj of class
account1.like(true)
// log  a proprty of obj of class 
console.log(account1.liked)