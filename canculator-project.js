"use strict";

/* ==== User Input ==== */
let num1 = prompt("Enter Your First Number");
let num2 = prompt("Enter Your Second Number");

/* ==== Convert Into Number ==== */
num1 = parseInt(num1);
num2 = parseInt(num2);

/* ==== Variable for All Mathematical Operators ==== */
let result;

/* ==== Addition ==== */
result = num1 + num2;
document.write("Addition: " + num1 + " + " + num2 + " = " + result + "<br>");

/* ==== Subtraction ==== */
result = num1 - num2;
document.write("Subtraction: " + num1 + " - " + num2 + " = " + result + "<br>");

/* ==== Multiplication ==== */
result = num1 * num2;
document.write("Multiplication: " + num1 + " * " + num2 + " = " + result + "<br>");

/* ==== Division ==== */
result = num1 - num2;
document.write("Division: " + num1 + " / " + num2 + " = " + result + "<br>" + "<br>");

let point = Math.random() * 10;
point = Math.round(point);
document.write("You Got " + point + " Point For Using Our Calculator");