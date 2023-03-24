type Cp =  { 
    id : number|null;
    date : Date;
}

function handleChain (name: Cp ){
    return  name?.id
}


handleChain({id:4343,date:new Date()})