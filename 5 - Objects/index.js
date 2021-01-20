{//48. 1- Basics
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

{//49. 2- Factory Functions
//// when a function is insede an object, like a propertie, so it become a method
////Factory  = producing products
////Factory Functions = produce objects
//                      // to customize de value of propertie, put it inside de brakets, like radius
////function createCircle(radius) {
////  return {
////      radius, //= radius: radius, //radius: 1,
//////function name (params)
////    draw () { // = draw: function () {
////      console.log("Draw function");
////    }
////  };//-we need return the result of a function,but, sometimes we don't really need defined a 
////    //-constant, E.G.: when it isnt going to reference it in anywhere, so we only want to return it in the caput.
////  //return circle;
//}
//// Clear version
//function createCircle(radius) {
//  return {
//      radius, 
//    draw () { 
//      console.log("Draw function");
//    }
//  };
//}
//
//const circle1 = createCircle(1);      
//  console.log(circle1);
//
//const circle2 = createCircle(2);      
//  console.log(circle2);
}

{//50. 3- Constructor Functions

//Camel Notation: oneTwoThreeFour
//Pascal Notation: OneTwoThreeFour  

///Factory Function = produce objects
//function createCircle(radius) {
//  return {
//      radius, 
//    draw () { 
//      console.log("Draw function");
//    }
//  };
//}
//Constructor Functions
//function Circle(radius, location){
////this is a reference to the object that is executing this piece of code.
////imagine this references an empty object.
//  this.radius = radius;
//  //this.location = location;
//
//  this.draw = function() {
//    console.log('draw');
//  }
//}

//When use new operator(const x = {};), 3 things happen:
//1 - this operator first creates an empty object
//2 - then it will set this to point to this object
//3 - and finally, it will return that object from this function.

//const circle = new Circle(1);
////const circle = new Circle(1, 2);
//  console.log(circle)

}

{//51. 4- Dynamic Nature of Objects
  // A constant means: we cannot reassign or reset, to a new object, this variable, 
  // but we can change(CRUD) the objects inside its, like a propertie
  //
//  const circle = {
//  radius: 1
//};
//
//circle.color = 'yellow'
//
//circle.draw = function() {}
//
//delete circle.color; 
//
//console.log(circle)

}

{//52. 5- Constructor Property
// Every object has a constructor property, and that references
//a function that was used to create that object.

////Factory Function
//function createCircle(radius) {
//  return {
//    radius, 
//    draw () { 
//      console.log("Draw function");
//    }
//  };
//}
//const circle = createCircle(1);
//console.log(circle.constructor)
////the circle object we created and returned it from our factory
////function, and because we used the object literal syntax,
////internally it was created using this object constructor 
////function. In JavaScript we have a few other built in constructors
//// E.G.: '', "", `` to creat a string
//
////Constructor Functions
//function Circle(radius) {
//  this.radius = radius;
//  this.draw = function() {
//    console.log('draw');
//  }
//}
//const another = new Circle(1);
//console.log(another.constructor)
////returns our circle function that we used to create this object

}

{//53. 6- Functions are Objects(review many fcking times)

//function Circle(radius) {
//  this.radius = radius;
//  this.draw = function() {
//    console.log('draw');
//  }
//}
                          //(arguments)
//const Circle1 = new Function('radius',`
//this.radius = radius;
//this.draw = function() {
//  console.log('draw');
//}
//`);
//console.log(Circle1)

//Circle.constructor
//So the purple icons are methods, like call, bind, and apply,
//and the blue icons are propertie
//const circle = new Circle1(1);
//console.log(circle)

     // to call a function
//Circle.call({},1) //({}<targeted empty object created by thisArg,1,2..number of arguments)
//This expression is exactly on next line,when we use the new 
//operator, this will internally create an empty
//object and pass that as the first argument to the call method. 
//And this object will determine the context of this, so,
//this will reference this object. If we don't use the new 
//operator, this ,by default, will point to the global object
// which is window. So, if I want to rewrite this
//expression in this way,instead of passing an empty object,

//Circle.apply({},[1,2,3...])<<<excatly the same, but it can pass
//an array

//const another = new Circle(1);
//console.log(Circle)

}

{//54. 7- Value vs. Reference Types


  
} 
 
{//55. 8- Enumerating Properties of an Object
}

{//56. 9- Cloning an Object
}

{//57. 10- Garbage Collection
}

{//58. 11- Math
}

{//59. 12- String
}

{//60. 13- Template Literals
}

{//61. 14- Date
}

{//62. 15- Exercise 1- Address Object
}

{//63. 16- Exercise- Factory and Constructor Function
}

{//64. 17- Exercise 3- Object Equality
}

{//65. 18- Exercise 4- Blog Post Object
}

{//66. 19- Exercise 5- Constructor Functions
}

{//67. 20- Exercise 6- Price Range Objects

}
