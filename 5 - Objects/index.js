{ //48. 1- Basics
  //Objects = collections of key value pairs
  //  - Purpose = of an object is:
  //      1 - group related variables
  //      2 -functions that should operate on these variables.

  // declared variables --- become properties, when inside and object
  //let radius = 1;
  //let x = 1;
  //let y = 1 ;

  //Method = function is part of an object
  // the function should be add inside an object
  //function draw() {} >> draw: function() {}
  //function move() {} >> move: function() {}

 // const circle = {
 //   radius: 1,
 //   location: {
 //     x: 1,
 //     y: 1,
 //   },
 //   isVisible: true,
 //   //function name (params)
 //   draw: function () {
 //       console.log("Draw function");
 //   },
 // };
 //
 // circle.draw(); // method
}

{  //49. 2- Factory Functions
// when a function is insede an object, like a propertie, so it become a method
//Factory  = producing products
//Factory Functions = produce objects
                      // to customize de value of propertie, put it inside de brakets, like radius
function createCircle(radius) {
  return {
      radius, //= radius: radius, //radius: 1,
//function name (params)
    draw () { // = draw: function () {
      console.log("Draw function");
    }
  };//-we need return the result of a function,but, sometimes we don't really need defined a 
    //-constant, E.G.: when it isnt going to reference it in anywhere, so we only want to return it in the caput.
  //return circle;
}
const circle1 = createCircle(1);      
console.log(circle1);

const circle2 = createCircle(2);      
console.log(circle2);
}

{//50. 3- Constructor Functions
}

{  //51. 4- Dynamic Nature of Objects
}

{//52. 5- Constructor Property
}

{ //53. 6- Functions are Objects
}

{//54. 7- Value vs. Reference Types
} 
 
{  //55. 8- Enumerating Properties of an Object
}

{  //56. 9- Cloning an Object
}

{  //57. 10- Garbage Collection
}

//58. 11- Math
{
}

//59. 12- String
{
}

//60. 13- Template Literals
{
}

//61. 14- Date
{
}

//62. 15- Exercise 1- Address Object
{
}

//63. 16- Exercise- Factory and Constructor Function
{
}

{//64. 17- Exercise 3- Object Equality
}

{  //65. 18- Exercise 4- Blog Post Object
}

{  //66. 19- Exercise 5- Constructor Functions
}

{  //67. 20- Exercise 6- Price Range Objects
}
