// func generic 
function test2666<T>(value:T):T{
    return value
}

test2666<number>(343)


// method generic 

class test847 {
    test2666<T>(value:T):T{
        return value
    }
}

