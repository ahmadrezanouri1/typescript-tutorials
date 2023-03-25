//  class generic 

class Tets <T> {
    constructor(public number : T){

    }
}

let test2 = new Tets<number>(1)


// two generic class 
class Tets2 <T,K> {
    constructor(public key : T,public value :K){

    }
}

let test3 = new Tets2<number,string>(1,'ali')



// inhertance in generic class 

interface Product {
    name:string;
    product_id:number;
}


class Store<T> {
    private _Object: T[] = [];
    add(obj:T){
        this._Object.push(obj)
    }

    get objectStore(){
        return this._Object
    }
}



class Compressable<T> extends Store<T> {
    compress(){

    }
}

let MyCardStore = new Compressable<Product>()

MyCardStore.add({name:'fkdkfd',product_id:494})
MyCardStore.add({name:'jfdjdjfds',product_id:475845})

console.log(MyCardStore.objectStore
)

