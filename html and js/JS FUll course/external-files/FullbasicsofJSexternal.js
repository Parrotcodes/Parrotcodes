
// writing to HTML pages directly
document.writeln('Welcome to JS')
document.write(10 + 5)
document.writeln(20 + 5)
document.writeln('1+2+3 i am a string')
// ----wtitting into the console ----
console.log('I am here in console')

// ----------Declaration of Variables---------
// var _valid
// var valid
// var class-not valid
// var girl
// var Girl
// var 9ae - not valid


// --- var ---bikeName -- default value is undefined (we declare value later also when we need!) we can also re-declare already declread using var
var bikeName = 'Hero'
console.log(bikeName)

var bikeName = 'TVS'
console.log(bikeName)

//--- let ---type of variable(outside the block we can't access let var outside scope But using var we can achive this problem) we can nto re-declare already declread using var it shows like unique name 
let BikeName = 'KTM'
console.log(bikeName)

// ----Const ---keyword is used to constant a given value we can not re-declare or change once we declared for the particular variable name
const pi = 3.14
console.log(pi)



// var,let,const are of variable types
let a = 11
let b = 2
let c = a * 3 + 4 + b / 5 * 5 - 3;

console.log('The sum of a+b is ', a + b)
console.log('The sum of diff expression mixed resulst is ', c)

// ---------comments------
//1. single line comment

/* 2. multi line 
comments
in javascript*/


// ------Data-Types in JS-------

// 1.Primitie Data Type (stores in Stack) base type - 5 types (num,strng,bool,undefined,null)
var x = 2//num
var f = 2.5//float/double
var y = 'Hello String'//string
var z = true//bool
var p;//undefined

// ---typeof() method is used to find the type of data-type or varibles present in the code
document.writeln(typeof (y))
document.writeln(typeof (x))
document.writeln(typeof (z))

// 2.Non-Primitive Data Types (Stores in Heap) object type - 2 types (array,obj)
var nul = null
document.writeln(typeof (null))


// ------ Type conversion in Js -------

var n = 34
console.log(n, typeof (n))


var n = String(34)
console.log(n, typeof (n))

var st = '123'
console.log(st, typeof (st))

var st = Number('123')
console.log(st, typeof (st))


var st = parseInt('123')
console.log(st, typeof (st))


// ------- Operations in JS ----------

/*
1.Arthimatic (+,-,*,/,++,--,%)
1+2,    a+b+c,  a-b-c,  1*5*a
2.Assignment (=,+=,-=,*=,=/,%=,^=, **= etc.)

var a=10
var b = a
console.log(b)

--> output: 10

var z = ++b 
--> output: 11


var z = --b (b=11)
--> output: 10

3.String (+,+=)

+ --> concatination
+= --> same as assignment operator

var str1 ="Hello"
var str2 = "JavaScript"

var conc = str1 + str2

console.log(conc)

--> output: Hello JavaScript


---Associativity---
Direction of expression (right to left associtive 
    var a = 12)
var result = m+n
 document.write('<h1>Value of result is '+result+'Associtivity result from right to left ')

 //But for + operator direction is (left to right)
 var o = 5

 var result = m+n+o; (m+n = 10)+o
            => 10+5 =15

4.Conditional (if,if-else,switch,?:)

5.Logical (&&,II,!)

6.BitWise (&,I,`,^)
// These are work in 32bit  which convert binary then to JS 

7.Comparision ( >,<,>=,<=,===,==,!=) 

8.Type of (typeof(var_name))
    sting
    boolean
    number
    object

*/

/*
// ----- Control statements (Flow of Execution) ----------
1.Conditional Control Statements
    -- if-else
    -- switch
2.Iterative Statements (Loops)
    -- for
    -- while
    -- do while
    -- for..in
    -- for..of
//Used in Control statment to monitor specific conidition inside the loops
//1. Break -- breaks the loop
//2. Continue --- breaks the single exact condition is true then continue after skip the condition 

1.Conditional Control Statements
-- if-else
     var x =5
    if(x>=5){
        //statement true
    }
(or)
    if(){
        //statment true
    }
    else{
        //statement false
    }
(or)
    if(){
        //statement true/false
    }else if(){
        //statement false/true
    }else{
        //statement false
    }


Eg: 1.Greater among two numbers
    2.Checking Numbers are positive or negitive
      or Zero
    3.For Nested if using conditonal operator and bitwse operators like (&& II !=) (
    i.postive or Negative then ii. Odd or Even number
    iii. Number is Zero
    )

-- switch Case (it accepts all data-types)
        switch(condition){
            case 1:
                //statement
                break;
            case 2:
                //statement
                break;
            case 3:
                //statement
                break;
            case 4:
                //statement
                break;
            default:
                //statement
        }
        
Eg:
    1. Find the Month (Month = 1 --> January) similarly for all 12 Months with case numbers

    2. Find the Month (Month = 1 --> January) similarly for all 12 Months with case string

    3. Find the Month (Month = 1 --> January) similarly for all 12 Months with case boolean
*/


/* 
// Loops (Iterative Control Statements)

// ---------For Loop (When we Must know the exact no.of iterations then for-loop is used )-----

    for(intilalization;condition;increment/decrement){
    // statement
    }

Eg:
1.Print 10 Numbers
    
    for( var i =1;i<=10;i++){
        document.write(i)
    }

    --> Output: 1 2 3 4 5 6 7 8 9 10

2.Print Any one Multiplication Table

3.Print only Odd/Even numbers

    for( var i =1;i<=10;i+=2){
        document.write(i)
    }

    --> Output: 1  3  5  7  9 //odd numbers

// ------  While-Loop (when condition is not aware of certain numbers / not known exactly then while-loop is used) --------

Eg:
1.Print 50 Numbers
    var i =1
    while(i<=50){
        
        document.write(i)

        i++
    }

2.Print only Odd/Even numbers

    var i =1
    while(i<=50){
        
        document.write(i)

        i+=2
    }

// ---------- Do-While Loop (Condition is checks after executions atleast once either it true/false )

    var y = 10
    do {
        //statement
        y--     //y decrement
    } while(condition)

Eg:
    1.Print  numbers which depends on condition

    var p = 10
    do {
        document.write(p)
        p--     //y decrement
    } while(p > 5)

    --> output: 10 9 8 7 6 

*/




// ----------- Programs using Loops --------------

//program to check if a number is prime or not 
//using for loop


var number = 78
var isPrime = true

// check if number is equal to 1
if (number === 1) {
    document.write('<h1>1 is neither Prime nor composite number </h1>')
}
// check if number is grater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (var i = 2; i < number / 2; i++) {
        if (number % i == 0) {
            isPrime = false
            break
        }
    }
    if (isPrime === true) {
        document.write(number + '<h1> IS a Prime number</h1>')
    }
    else {
        document.write(number + '<h1> IS not a Prime number</h1>')
    }
}
else {
    document.write('<h1>The number is not a prime prime number or valid number!<br> Check the number once....</h1>')

}


//---------- Using while loop prime or not----------
/*

// 2.problem

var num = 73
var isPrimee = true
var i = 2

// check the number is equal to 1 or not
if (num === 1) {
    document.write('<h1>using while loop:<br>1 is either prime or Composite number</h1>')
}

// check the number is prime or not
else if (num > 1) {
    // looping through 2 to number -1 
    while (i < num / 2) {
        if (num % i == 0) {
            isPrimee === false
            break
        }
        i++

    }


    if (isPrimee == true) {
        document.write('<br><br>using while loop:<br>' + num + ' is  a prime number')
    } else {
        document.write('<br><br>using while loop:<br>' + num + ' is not a prime number')
    }

}

// to check if number is less than 1
else {
    document.write('<h1>using while loop:<br>The number is not a prime number..<br>or else check the value of given number!</h1')
}
*/

// --------- Using While loop Armstrong number or not ----------

var anum = 121
var sum = 0

let temp = anum
while (temp > 0) {
    var remainder = temp % 10

    sum = sum + remainder * remainder * remainder

    temp = parseInt(temp / 10)//converting float into integer
}

if (sum == anum) {
    document.write(anum + 'is an Armstrong number')
} else {
    document.write(anum + 'is not an Armstrong number')

}


// --------- Using do-While loop Factorial of a number ----------

var x = 1
var y = 10
var f = 1

do{
    f = f*x
    x++
}while(x<=y)

document.write('<br>The factorial of  ' + y+' is '+f)


