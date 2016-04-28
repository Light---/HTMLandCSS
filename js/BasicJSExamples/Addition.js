/*Introductory function to JavaScript!
All programming languages contain functions. They are the atomistic elements of programming.
The first function that you will probably come accross in all languages is the "adding function".
That is exactly the function that will be presented here, to demonstrate the (very) basic 
uses of JavaScript.
*/

/*Commenting: Whenever you see a "//" or "/*", note that it does not contribute to the 
functionality of the code. However, commenting is a very important part of programming,
especially when the code becomes very complex. It gives the opportunity to the programmer
to remind himself and tell others(like you!) what the code does, what variables define, etc.
*/

//By Hayden Horan
//4/18/2016

/*
Before we get to the actual code, we need to make some definitions crystal clear first:

Variable: A name given to a value, a line of text, an array, etc.

Function: A function is a collection of (functional) code that is grouped together and labelled 
(i.e. given a name). What's so great about a function? It can be called over and over again,
saving time and vastly improving efficiency. Note that all languages come with some built-in functions,
but many you will create on your own. For example, we will build an add function but use other
predefined JavaScript functions within our code. Also note that functions are somewhat of a subclass of
variables. They are defined in the same way, as shown in the example.

String: A string is a grouping of characters inbetween apostrophes or quotation marks (both of which do
the same thing in JavaScript).

Operator: Just as in mathematics, an operator (such as +,-,*,/) represents an action, or an "operation", hence
the name.

Command: As defined by Wikipedia, a command is "a directive to a computer program acting as an interpreter of some
kind, in order to perform a task". Basically, a command tells the computer to do something.

*/
var Addition= function(a,b){
/*This function takes in two variables(also called function arguments or parameters, 'a' and 'b', 
as inputs and will add them together.We declare the variable "Addition" by using the command 'var', 
which stands for 'variable'. However,we want this particular variable to be a function. Thus, we 
tell our machine to make it a function by writing "= function".
*/

var Sum= a+ b;
//We define another variable "Sum" that stores the value of 'a' + 'b'.

var convertSumtoString= Sum.toString();
/* For reasons that will become apparent, we want to convert our variable "Sum" into a string.
//The function .toString is an example of a predefined function in the JavaScript language, which 
acts on the argument (an integer) that is placed before the period.
*/
var myString= 'The addition of the two numbers is'
//We make another string

var Space= ' '
//We make a space. Note, this is also a string.

var Output= myString+Space+convertSumtoString
/* This is interesting. We notice that we can "add" strings together! Just like we can add integers.
However, we cannot subtract, multiply, or divide strings, for obvious reasons. 
*/

return (Output);
/*The return value is of pivotal importance. After the function (in this case Addition) accepts its inputs, 
and operates on those inputs (adds them together then converts them into a string), the return keyword is where the 
final value is stored. This value can be passed to other functions, where further manipulations can be made, as we will see.
*/

}

/* Another useful note: Notice how my function and variables were given a name with meaning. If I had given them arbitrary 
names, it would be difficult to know what information they contained. For example, if I had named my function "elephant",
I would not know for what the function is actually used.
There are a few ways we can execute this code: using node.js, programming.js, or using html are probably the three most common.
We will do the latter. Please see ExecuteAdditionFunction.html (in this directory) for details.
*/





























