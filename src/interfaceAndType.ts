// this file for fined interface(have extend) and type 


interface IUser {
    name:string;
    age:number;
    country:string;


}
// this is future extends for interface 

interface Ibook extends IUser {
    title:string;
    price:number;

}



// fined  type and use 

type Iclass={
    number?:number;

}


// this normal array & tupl
const myArray :string []= [
    'ali','mohamma'
]
 

// generic type
const myArray2 :Array<number> = [1,2,3,5]

// new syntax for fined Array type
const myArray3:(string|number)[] = [1, 'mohammad',2,'ali']

const myOrders = {
    title:"5 am ",
    name:"ali",
    price:200
}

function Iorders( myOrders : Ibook) : Ibook {

    return myOrders


}

const tuple:[number,string] = [1402,'new year']


