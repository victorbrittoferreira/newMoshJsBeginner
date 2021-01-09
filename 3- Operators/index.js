{//28.1  - IF ELSE

//Conditionals Statements
//if (conditional){
//    statement
//}
//else if (anotherConditional){
//    statement
//}
//else if (yetAnotherCondition){
//    statement
//}
//else
//    statement
//
// Hour
// If hour is between 6am and 12pm: Good Morning!
// If it is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good evening!

//let hour = 5
//
//if (hour >= 6 && hour <12) 
//    console.log('Good Morning!')
//else if( hour >= 12 && hour <18) 
//    console.log('Good Afternoon!')
//else
//    console.log(('Good Evening!'))
}

{//29.2 -  Switch and Case
/*

//let role (a string default mode is undefined)
//let role = 'moderator';
//
//switch (role) {
//    case 'guest':
//        console.log('Guest User');
//        break;
//
//    case 'moderator':
//        console.log('Moderator User');
//        break;
//
//    default:
//        console.log('Unknown User');
//}


//ANOTHER WAY CLEANER THAN SWITCH AND CASE
//if(role === 'guest') console.log('Guest');
//else if(role === 'moderator') console.log('Moderator User');
//else console.log('Unknown User');
*/
}

{//30.3 -  For

////for(initialExpression; Condition; incrementExpression)
//        statment
//for (let i = 0; i < 5; i++) {
//for (let i = 1; i <= 5; i++) {    //Reordenated
//    console.log("Hello word!!", i)
//}


//This is a Translation from for to while loop;
//console.log('Translation for loop to while loop')

//for (let i = 5; i >= 1; i--) {
//    if (i % 2 !== 0) //console.log(i);
//    console.log("Hello word!!", i)
//}
}

{//31. 4- While Loop;

//// This 'I' is not the same previous 'I'.
//let i = 0;
//while (i <= 5) {
//    if (i % 2 !== 0) console.log(i);
//    i++;
//}
}

{//32. 5- Do...While

//// Important, on this loop, the condition is checked only at end.
//let i = 1;
//do {
//    if (i % 2 !== 0) 
//        console.log(i);
//    i++;
//} while (i <= 5);
} 

{//33. 6- Infinite Loops

//let i = 0
//while ( i < 5){
//  console.log(i);
//}      //i++
//
//while (true) {
//}    
//let x= 1; 
//do {
//      //x++;
//} 
//
//  while(x < 5);
//  for(let i = 0; i < 10;)
}

{//34. 7- For...In (Used to iterate in properties)

//const person = {
//    name: 'Mosh',
//    age: 30,
//};
//for (let key in person)
//    console.log(key, person[key]);
////Reminder, to access properties there is 2 ways, Dot Notation and Bracket Notation. Did not understand
//
//const colors = ['red', 'green', 'blue'];
//
//for (let index in colors)
//    console.log(index, colors[index]);
}

{//35. 8- For...of

//for (let color of colors)
//    console.log(color);
//
}

{//36. 9- Break and Continue

//console.log("Break an Continue");
//let i = 0;
//while (i <= 10) {
//    //if (i === 5) break;// Break go out of loop.
//    if (i % 2 === 0) { //Odd numbers
//        i++;
//        continue; //Continue go to the next iteration.
//    }
//    console.log(i);
//    i++; 
//}
}

{//37. 10- Max of Two Numbers

// Write a functions that takes two numbers and returns the maximum of two.

//    let number = max(3 , 2);
//    console.log(number);
//
//    function max (a , b) {
//        //if(a > b) return a;
//        //return b;
//
//    //Using a cleaner conditional
//    //(coditional) true : false
//    return (a > b) ? a : b 
//    }
}

{//38. 11- Exercise- Landscape or Portrait

//                       (width, height)   
//let number = (555 , 33)
//console.log(isLandScape(number));
//
//function isLandScape(width, height) {
//    // like previous exercise
//    return (width > height);
//}
}

{//39. 12- Exercise- FizzBuzz

//    //Divisible by 3 => Fizz    
//    //Divisible by 3 => Buzz
//    //Divisible by both => FizzBuzz
//    //Not divisible by both => same input
//    //Not a number => 'Not a numberz'

//let number = 

//const output = fizzBuzz(number) ;
//console.log(output);
//
//function fizzBuzz(input) {
//    if (typeof input !== 'number')
//        return 'Not a number!'; //NaN is a special value 
//    
//    if (( input % 3 === 0 ) && (input % 5 === 0)) //(the complex argument most be first )
//        return 'FizzBuzz';
//
//    if (input % 3 === 0 )
//        return 'Fizz';
//
//    if (input % 5 === 0 )
//        return 'Buzz';
//
//    return input;    
//}
}

{//40. 13- Exercise- Demerit Points

// Speed Limit = 70
// 5km -> 1 point
// Math.floor(1.3)
// 12 points - > suspended

//checkSpeed(129);
//
//function checkSpeed (speed) {
//    const speedLimit = 70; 
//    const kmPerPoint = 5;
//
//    if (speed < speedLimit + kmPerPoint) {
//        console.log('Ok');
//        return;    
//    }
//
//    const points = Math.floor((speed - speedLimit) / kmPerPoint);
//    if (points >= 12)
//        console.log('License Suspended!');
//    else 
//        console.log('Points', points);
//}
}

{//41. 14- Exercise- Even and Odd

//showNumbers (10); 
//
//function showNumbers(limit) {
//    for (let i = 0; i <= limit; i++) {
//        //if (i % 2 === 0) console.log(i, 'EVEN');
//        //else console.log(i, 'ODD');
//        
//        //Noiseless
//        const message = (i % 2 === 0) ? 'EVEN': 'ODD'
//        console.log(i, message);
//    }
//}
}

{//42. 15- Exercise- Count Truthy

 //Falsy 
 //undefined
 //null
 //''
 //false
 //0
 //NaN
 //My task here is create an function which does count all Truthy values

//const array = [0, null, undefined, '', 2, 3//////onsole.log(countTruthy(array//
//function countTruthy(array) {
//   let count = 0 
//       for (let value of array)
//           if (!value) //! negaction   // pour way -> if(value !== false || value !== undefined)
//               count++;
//       return console.log ('Were(was) found', count, 'value(s)!' )
//   }
}

{//43. 16- Exercise- String Properties

// This function has to show all string's properties.

//const movie = {
//    title: 'a',
//    realizeYear: 2018,
//    rating: 4.5,
//    director: 'b'
//};
//
//showProperties(movie);
//
//function showProperties(obj) {
//    for(let key in obj) //for each key(objet) in showProperties' objet 
//        //console.log(key)
//        if (typeof obj[key] ==='string') //if type of objets' objet is === a 'string'
//            console.log(key,':',obj[key]);//print the showProperties' objets' objet 
//        //for(let key in obj){
//    //    if( typeof obj[key] ==='number')
//    //        console.log(key, obj[key])
//    //}
//}
}

{//44. 17- Exercise- Sum of Multiples 3 and 5

  //Multiples of 3: 3, 6, 9.
  //Multiples of 5: 5, 10
console.log("oi");
//console.log('Total of multiple sum:',sum(10));
//
//function sum(limit) {
//    let sum = 0
//      //i = multiple   //limit of multiple = 10
//    for (let i = 0; i <= limit; i++)
//        if( i % 3 === 0|| i % 5 === 0)
//            sum += i;
//
//    return sum;    
//}
}

{//45. 18- Exercise - Grade

//Calculate a Grade of student
//Simple average calculation

//1-59: F
//60-69:D
//70-79:C
//80-89:B
//90-100:A

//math = 20
//compSci = 10
//logic = 50
//
//const marks = [math, compSci, logic];
//
//console.log('Mark:',calculateGrade(marks));
//console.log('Mark:',calculateAvarage(array));

{
//function calculateGrade(marks){

//       let sum = 0
//
//    for ( let mark of marks)
//        sum += mark;
//
//    let average = sum/marks.length;{
//        console.log('Avarage:',average)
//            if (average <60) return 'F';
//            if (average <70) return 'D';
//            if (average <80) return 'C';
//            if (average <90) return 'B';
//            if (average <=100) return 'A'
//                return 'He is fuck genius!'
//    }
//}
}
// S I N G L E   R E S P O N S A B I L I T Y   P R I N C I P L E 

function calculateAvarege(array) {
      
    let sum = 0;
    for ( let value of array)
        sum += value; 
    
    return sum / array.length;
}

        
function calculateGrade(marks){
    const average = calculateAvarege(marks);
        console.log('Avarage:',average)
    if (average <60) return 'F';
    if (average <70) return 'D';
    if (average <80) return 'C';
    if (average <90) return 'B';
    if (average <=100) return 'A'
        return 'He is fuck genius!'
}
}

{//46. 19- Exercise - Stars

//showStars(10)
//
//function showStars(rows){
//    for(let row = 1; row <= rows; row++) {
//        let pattern = '';
//        for (let i = 0; i < row; i++)
//            pattern += '*';
//        console.log(pattern);
//    }
//}
}

{//47. 20- Exercise - Prime Numbers

//showPrimes(20); 
//function showPrimes(limit) {
//    for(let number = 2; number <= limit; number++){ 
//
//        let isPrime= true;
//        for (let factor = 2; factor < number;factor++){
//            if(number % factor === 0){
//                isPrime = false 
//                break; 
//            }          
//        }
//        if (isPrime)console.log(number);
//    }
//} 

//function showPrimes(limit) {
//    for (let number = 2; number <= limit; number++)
//        if(isPrime(number)) console.log( number);
//}        
//function isPrime(number) { 
//    for (let factor = 2; factor < number; factor++)
//        if (number % factor === 0)
//            return false;
//
//    return true;
//
}