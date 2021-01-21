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

//Value Types    Reference Types
//-Number         -Object
//-String         -Function
//-Boolean        -Array  
//-Symbol
//-undefined
//-null

//-Primitives are copied by their value, 
//-Reference types or Objects are copied by their reference.


//let x = 10;
//let y = x;
//
//x = 20

//let x = {value: 10};
//let y = x;
//
//x.value = 20; 

//That object is stored somewhere else in the memory, and the address
//of that memory location is stored inside that memory variable.
//So y is dependent on x, coz ,both, x and y, are pointing to the same,

////let number = 10;
//let obj = {value: 10}

////function increase(number){   // when we call increase and pass this number variable
////                              //it's value is copied into this parameter that is
////                              //local in this function. So this variable here is 
////                              //completely independent of this other number variable
////  number++; 
////} //after this function, this number is going to go out of the scope.

//function increase(obj){
//  obj.value++;
//}

////increase(number);
////  console.log(number);

//increase(obj);
//  console.log(obj);
} 
 
{//55. 8- Enumerating Properties of an Object
// For... let key ...In circle with this we can iterate over all the properties and methods of an object
//But,the new For...of we can iterate only iterable objects,e.g.: Array, Map, Set, ArgumentsObjects and others...

//const circle = {
//  radius: 1,
//  draw() {
//    console.log('draw');
//  }
//};

////Console only the keys
//it iterate over all the properties and methods of an object.
//for(let key in circle)
//console.log(key);

////Console the key and value
//for(let key in circle)
//  console.log(key, circle[key]);

//object inst iterable, we need use a method
//for (let key of circle)
//  console.log(key);

//thats method, Object.keys(), will get all the keys in our 
//circle object, and this will return an array. Its a built
//in constructor function

//for (let key of Object.keys(circle))
//console.log(key);

//Such the previous method, that is translated into a call to
//-this constructor function. So when we create an object using
//-the object literal syntax, like this, value is 1, internally, 
//-that is translated to a call to this object constructor function

//function Object () {}
//const x = { value: 1};
//const x = new Object();

//Using the keys method, and this method returns a string array
// which contains all the properties and methods in this object.
//Object.keys()

//Entries method
//for (let entry of Object.entries(circle))
//  console.log(entry);

// to see if a given property or method exists in an object we use the >in< operator.
//if('radius' in circle) console.log('Yes');

}

{//56. 9- Cloning an Object

const circle = { 
  radius: 1,
  draw() {
    console.log('draw');
  }
};


  //1st way ...too old.
//remember, {} = empty
//const another = {};

//Use the ForIn loop to iterate over all the properties in an object, 
//and copy them into this new object >>empty{}

//for (let key in circle) 
////Use the bracket notation [] to access a property with a given key.
//  another[key] = circle [key];
//  another ['radius'] = circle ['radius']

  //2nd way to clone an object,we can pass multiple source objects

//This target object pass here doesn't have to be an empty object, 
//it can be an existing object, it can have 1 or more properties or methods.

//const another = Object.assign({}, circle); 
const another = Object.assign({
  color: 'yellow'
}, circle); 

  //3rd way to clone it...simple and new way

//const another = {...circle };

console.log(another);


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
