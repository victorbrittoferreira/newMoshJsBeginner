{//28.1  - IF ELSE

//Conditionals Statements
//if (conditional){ //(true)
//    (execute)statement
//} //(inside curly braces is a block of code , use if has multiples statements)
//else if (anotherConditional){
//    statement  //(theres no limition for this 'else if')
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

// in let role (a string default mode is undefined)
//let role = 'moderator';
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
//        // isnt necessary a "break", cuz ,at this points, the control will automatically
//        // get out of this switch block 
//}

//ANOTHER WAY CLEANER THAN SWITCH AND CASE
//if(role === 'guest') console.log('Guest');
//else if(role === 'moderator') console.log('Moderator User');
//else console.log('Unknown User');
}

{//30.3 -  For
// types of loops: For; While; Do...While; For...in; For...of;

////for(initialExpression; Condition; incrementExpression)
//        statment
// for (let i = 0; i < 5; i++) {
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
// in ForLoops, the loop variable is a part of the loop variable itself,
//But in Whileloops, you have to declare this i variable externally. 

// This 'I' is not the same previous 'I'( in previous lesson "ForLoop").
//let i = 0; //()
// While( condition, like in ForLoop)
//the condition is checked every cicle until at end.
//while (i <= 5) {
//    if (i % 2 !== 0) console.log(i);
//    i++;
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

//1st - E.G.
//let i = 0
//while ( i < 9999){
//  console.log(i);
//      //i++;//( whitout the increment operator, its become a IL.)  
//}  

//2nd - E.G.
//while (true) {
//}    

//3rd - E.G.
//let x = 0; 
//do {
//    //x++; //( whitout the increment operator, its become a IL.)
////console.log(x);
//
//}while(x < 5);
//
//console.log(x);    


//4th - E.G.
//for(let i = 1; i < 10;//i++)  <<<//( whitout the increment operator, its become a IL.)
//console.log(i);  
}

{//34. 7- For...In (Used to iterate the properties)

//const person = {
//    name: 'Mosh',
//    age: 30,
//};
//for (let key in person)
//  console.log(key);
                //,'read "values of key of person"'
//  console.log(key, person[key]); //once read, it is forgotten in memory. so it is not possible to print the same variable twice in row
//Reminder, to access properties there is 2 ways:

//Dot Notation 
//-Use the dot.notation to display the value of this property, in other words,
//  we can't do something like this >>>console.log(key, person.key);<<<, 
//  because we don't have a property called key in the person object.
//  So that's when we use the bracket notation. 
//  So we add square brackets,>>>console.log(key, person[key])<<<
//  and pass key as the name of the target property.

//Bracket Notation. (its behave like a wildcard[joker])>>>(key, person[key]))
//-Use the bracket notation when we don't know ahead of time, 
//  at the time of writing code, what property we're going to access.
//  Perhaps the name of the target property is calculated at run time.
//  An E.G.: When we iterate over the properties of the person object,
//   in each iteration thevalue key is going to be different

// Another exemple
//const colors = ['red', 'green', 'blue'];
//
//for (let index in colors)
////    console.log(index);
//                    //,'read "colors of index"'
//    console.log(index, colors[index]);
}

{//35. 8- For...of (Use to iterate the properties' values)
//Difference between for...of and for...in: both of statements iterate over something.
//The main difference between them is in what they iterate over.
//The for...in statement iterates over the enumerable properties of an object, in an arbitrary order.
//The for...of statement iterates over values that the iterable object defines to be iterated over.
//E.G.iterable objects>> Array, Map, Set, ArgumentsObjects

//const colors = ['red', 'green', 'blue'];
//
//for (let color of colors)
//    //console.log(color);
//    console.log(color);
    
}

{//36. 9- Break and Continue

//console.log("Break an Continue");
//let i = 1;
//while (i <= 10) {
//    //if (i === 5) break;// Break go out of loop.
//    if (i % 2 === 0) { //Odd numbers
//        i++;
//        //continue; //Continue go to the next iteration...thats the opposite of break
//    }
//
//    console.log(i);
//    i++; 
//}
}

{//37. 10- Exercise-  Max of Two Numbers

// Write a functions that takes two numbers and returns the maximum of two.
// RESOLUTION: Ternary or IF

//let number = max (5, 3);
//console.log('Greater: '+number)
//
//function max (a, b){
//    if (a > b) return a;
//    return b;

      //(coditional) true : false
//return  (a > b) ? a : b;
//}
}

{//38. 11- Exercise- Landscape or Portrait

//          (width, height)   
//let x = (140) 
//let y = (10) 
//console.log(isLandScape(x , y));
//
//function isLandScape(width, height) {
        // like previous exercise
    //if (width > height) return true;
    //return false; 
                            //(its not necessary)
    //if ( width > height) return 'Landscape';
    //return 'Portrait';
    
    //return (width > height)? 'Portrait' : 'Landscape' ;
    //return (width > height);//(true or false)
//}
}

{//39. 12- Exercise- FizzBuzz
//    //Divisible by 3 => Fizz    
//    //Divisible by 3 => Buzz
//    //Divisible by both => FizzBuzz
//    //Not divisible by both => same input
//    //Not a number => 'Not a number'

//number = 90
//
//const output = fizzBuzz(number)
//console.log(output); 
//
//function fizzBuzz (input){
//
//    if ( typeof input !== 'number')
//        return 'Not a number!'; // return NaN;
//            
//    if (( input % 3 === 0) &&(input % 5  === 0))
//        return 'FizzBuzz!';
//    
//    if ( input % 3  === 0)
//        return 'Fizz!';
//
//    if ( input % 5  === 0)
//        return 'Buzz!';
//    return input;
//}
}

{//40. 13- Exercise- Demerit Points

// Speed Limit = 70
// 5km -> 1 point
// Math.floor(1.3)
// 12 points - > suspended

//checkSpeed(90); 
//
//function checkSpeed(speed) {
//
//    const speedLimit = 70;
//    const kmPerPoint = 5;
//
//    if (speed < speedLimit + kmPerPoint) {
//        console.log('OK');
//        return;
//    }
//    const points = Math.floor((speed - speedLimit) / kmPerPoint);
//    if(points >= 12)
//        console.log('License Suspended!');
//    else
//        console.log('Points:',points);
//}
}

{//41. 14- Exercise- Even and Odd
// showNumbers(10);
// 
// function showNumbers(limit){
//    for (let i = 0; i <= limit; i++ ){
//    //    if ( i % 2 === 0 ) console.log(i ,'Even');
//    //    else console.log(i, 'Odd');
//
//    const message = ( i % 2 === 0 ) ? 'Even' : 'Odd'
//    console.log(i , message);
//    }
//} 
}

{//42. 15- Exercise- Count Truthy

 //Falsy:
 //-undefined
 //-null
 //-''
 //-false
 //-0
 //-NaN

// const array = [0, 0, null, undefined, '', 1, 2, 3]
//
// console.log(countTruthy(array))
//
// function countTruthy(array){
//    let count = 0
//    for (let value of array) // for...of coz its used to iterate an object
//        if (value) // if its a value, so its true or truthy
//            count ++;
//    return count;
//}
//______________________________________________________________ 
// console.log('There were(was) found', countTruthy(array), 'truthy value(s) and', countFalsy(array),'falsy value(s)!')
//  
// function countTruthy(array) {
//     let count = 0 
//     for (let value of array)
//     if (value) //!beforme something = negaction   
//     // pour way -> if(value !== false || value !== undefined)
//     count++;
//     return count;
//    }
//    
//function countFalsy(array) {
//    let count = 0 
//       for (let value of array)
//           if (!value) //!beforme something = negaction   
//            // pour way -> if(value !== false || value !== undefined)
//               count++;
//        return count;
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
//        for(let key in obj) //for each key(objet) in showProperties' objet 
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

//console.log('Total of multiple sum:',sum(10));
//
//function sum(limit) {
//let sum = 0 

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

//const marks = [95, 95, 90];
//
////console.log('Mark:',calculateAvarege(array));
//console.log('Mark:',calculateGrade(marks));
//console.log('Avarege:',calculateAvarege(marks))
//
//{
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
//}
//// S I N G L E   R E S P O N S A B I L I T Y   P R I N C I P L E 
//
//function calculateAvarege(array) {
//    let sum = 0;
//    
//    for ( let value of array)
//    sum += value;   
//    
//    return sum / array.length;
//    //return average;
//}
//function calculateGrade(marks){
//    const average = calculateAvarege(marks);
//    if (average <60) return 'F';
//    if (average <70) return 'D';
//    if (average <80) return 'C';
//    if (average <90) return 'B';
//    if (average <=100) return 'A'
//    return
//    //return 'Fuck genius!'
//}
}

{//46. 19- Exercise - Stars( NESTED LOOP - INNER LOOP)

//showStars(9)
//
//function showStars(rows){
//        
//    for( let row = 1; row <= rows; row++){
//         let pattern = '';
//            //start 0 coz it hs been reindexed(1) in previous loop
//        for(let i = 0; i < row; i++)
//            pattern += 'Hue Hue BR BR ';
//        console.log(row, pattern);
//}
}

{//47. 20- Exercise - Prime Numbers
{
//showPrimes(99) 
//function showPrimes(limit) {
//    for(let number = 2; number <= limit; number++){ 
//
//        let isPrime = true;
//        for (let factor = 2; factor < number;factor++){
//            if(number % factor === 0){
//                isPrime = false; 
//                break; 
//            }          
//        }
//        if (isPrime)console.log(number);
//    }
//}
}
//showPrimes(20)
//
//function showPrimes(limit) {
//    for (let number = 2; number <= limit; number++)
//        if(isPrime(number)) console.log(number);
//}        
//
//function isPrime(number) { 
//    for (let factor = 2; factor < number; factor++)
//        if (number % factor === 0) // cant be a ternary, coz i must modify the state of the memor
//            return false;
//        return true;
//}
}
