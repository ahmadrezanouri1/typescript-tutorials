// intersection 

type dic={
    name:string;
}

type dic2 = {
    number:number;
}

type dic4  = dic & dic2;


// union

type dicU={
    name:string;
}

type dic2U = {
    number:number;
}

type dic4I  = dicU | dic2U;
