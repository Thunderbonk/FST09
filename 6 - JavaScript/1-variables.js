console.log("Hello World!");
// This is a single line comment.
/**
 * this is a
 * multiline
 * comment
 */

// Variables: container/box.
/*
let - mutable/changeable (meaning you can update the value of the variable)
    - block-scope variable
var - mutable/changeable
    - global-scope variable
const - immutable/unchangeable
      - block-scope
*/

// camelCase naming convension.
/*  convension = some set of rules that we often 
    follow in order for us to make a more cleaner 
    and more structured code.
*/
// Code Block = group of statements enclosed in curly braces {}
let firstName = "John";
console.log("Firstname:", firstName);
firstName = "Jane";
console.log("Firstname:", firstName);

var lastName = "Doe";
console.log("lastname:", lastName);
lastName = "Smith";
console.log("lastname:", lastName);

{
  var email = "janesmith@example.com";
  let username = "janesmith40";
  console.log("Email:", email);
  console.log("username:", username);
}
console.log("Email:", email);
/*
Note: You can only access a block scope variable 
inside of the block where you defined it.
console.log("Username:", username); 
ReferenceError: username is not defined.
*/
// console.log("username:", username); ReferenceError: username is not defined

const bday = "01-19-2025";
console.log("Birthday:", bday);
// birthday = "01-25-1999"; TypeError: Assignment to constant variable.
