 
//  litteral type
 
 const shirorkhat  = ():lit=> Math.random() > 0.5 ?'shir':"khat"


 type lit = 'shir'|'khat'



//  enum 
enum Arrow {
    Up,
    Down,
    Right,
    Left
  };
  function Direction ( dir : Arrow ) : Arrow {
    return dir;
  }


Direction(Arrow.Right)






