// inter face generic

interface Result<T> {
    data:T|null;
    error:string|null;

}


interface User {
    username:string;
}

interface Product{
    product_id:number;
}


function fetch <T>(url:string):Result<T>{
    return {data:null,error:null}
}

fetch<User>('url')
fetch<Product>('url')