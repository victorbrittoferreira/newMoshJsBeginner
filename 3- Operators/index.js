{//17. Arithmetic Operators

//let x = 10;
//let y = 12;
//
//console.log(x + y);
//console.log(x - y);
//console.log(x / y);
//console.log(x * y);
//console.log(x % y);
//console.log(x ** y);
//
////Increment (++)
//console.log(" Increment ++ ")
//console.log(x++);
//console.log(++x);
//console.log(x);
//
////Decrements
//console.log(" Decrement -- ")
//console.log(--x);
//console.log(x--);
//console.log(x);
}
{//18. 3- Assignment Operators
//Increment with add.
//let z = 5;
//console.log(" Increment with add.")
//console.log(z += 5);
//console.log(z -= 5);
//console.log(z *= 5);
//console.log(z /= 5);
//console.log(z **= 5);
//console.log(z %= 5);
}
{//19. 4- Comparison Operators
//console.log(" Comparison Operator")
//let h = 1;
//
////Relation 
//console.log(h > 0);
//console.log(h >= 0);
//console.log(h < 0);
//console.log(h <= 0);
//
////Equality 
//console.log(h === 1);
//console.log(h !== 1);
}
{//20. 5- Equality Operators
    //Strict Equality. => (Type + Value)
console.log(1 === 1);
console.log('1' === 1);
//Lose Equality. => (Type ! Value)
console.log(" Lose Equality")
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);
}
{//21.6 -Ternary operators.
// If a customer has more than 100 points,
// so they are 'gold' customers, 
//otherwise , they are 'silver' customer.
//
//let points = 90;
//let type = points > 100 ? 'gold' : 'silver';
//
//console.log(type);
}
{//22. 7- Logical Operators with Non-booleans
////Logical Operators.
//console.log(" Logical Operators")
//// Logical AND (&&)
//console.log('Logical AND')
//// Returns TRUE if both operands are TRUE
//console.log(true && true)

//EligibleForLoan
//console.log('Eligible For Loan')
//
//let highIncome = true;
//let goodCreditScore = true;
//let eligibleForLoan = highIncome && goodCreditScore;
//
//console.log(eligibleForLoan);
//
//// Logical OR (||) 
//
//// This will return TRUE if one of operands id TRUE.
//
//console.log('Eligible For Loan')
//console.log('Logical OR')
//
//let highIncome = true;
//let goodCreditScore = false;
//let eligibleForLoan = highIncome || goodCreditScore;
//
//console.log(eligibleForLoan);
//
//// NOT (!) 
//
//console.log('Eligible For Loan')
//console.log('Logical OR')
//
//let highIncome = false;
//let goodCreditScore = false;
//let eligibleForLoan = highIncome || goodCreditScore;
//
//console.log('Eligible ', eligibleForLoan);
//
//let applicationRefused = !eligibleForLoan;
//console.log('Application Refused ', applicationRefused);
}
{// 23. 8- Logical Operators with Non-booleans
// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything is not Falsy -> Truthy

//let userColor = undefined;
//let defaultColor = 'blue';
//let currentColor = userColor || defaultColor;
//console.log(currentColor);
}
{//24. BitWise Operators
// Read, Write , Execute
// 00000100 R
// 00000010 W
// 00000001 E

//const readPermission = 4;
//const writePermission = 2;
//const executePermission = 1;
//
//let myPermission = 0;
//myPermission = myPermission | writePermission;
//
//let message =                //(so)    //otherwise
//(myPermission & readPermission) ? 'Yes' : 'No';
//
//console.log(message);
}
{// 25. 10- Operator Precedence

let f = (2 + 3) * 4;

console.log(f);
}
{// 27. 12- Exercise- Swapping

//let a = 'red';
//let b = 'blue';
//
//let c = a;
//a = b;
//b = c;
//
//console.log(a);
//console.log(b);
//console.log(c);
}