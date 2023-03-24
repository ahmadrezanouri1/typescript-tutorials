// generic


// create generic

interface Box<T> {
    contents:T;
}

const Boxstrings:Box<Array<string>> = {
    contents : ['ali','mohammad']
}

const Boxstring :Box<string>= {
    contents : 'string1'
}

const BoxNumbers:Box<Array<number>> = {
    contents : [1,3]
}



const identity  = <T>(x:T):T=>x


// use two generic  and use optional 

const randomElement = <T,U>(xs:T[],ya?:U[]):T|U=>{
    const randomIndex = Math.floor(Math.random()*xs.length);
    if(ya) {
        return ya[randomIndex]
    }
    return xs[randomIndex] as T;

}


const a = randomElement(['1',2,'hello'])
const b = randomElement([true,'false'])




console.log(a,b)
