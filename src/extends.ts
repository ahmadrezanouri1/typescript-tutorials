interface Ifamil{
    myFather:string;
    myMother:string;
    mybrothers:string;

}


interface cousin  extends Ifamil{
    mycousin :string;
    mysister:string;
}

interface allFamily extends cousin{
    familyName:string;
    
}


function handleInter (a:allFamily):allFamily{
return a ;
}