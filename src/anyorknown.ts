const handleSum   = (a:number,b:number):any=> {
       
    // sum  any 
    return a+b;
}


console.log(handleSum(4,5))



// unknown

function handleSumy (a:unknown){console.log(a)}



handleSumy(90)


function handleKnow(obj:unknown ):unknown{
    return obj 
    // return obj.name has error but if type any dont have error 
}