/* Assignment No. 23 */

/* 

Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. 

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

*/

let car: string = "Honda";

console.log("Is Car Honda? I predict true");
console.log(car == "Honda");

console.log("\nIs Car Toyota? I predict false");
console.log(car == "Toyota");

console.log("\n<---------------------- Test No. 1 ---------------------->\n");

let n1: number = 23;
let n2: number = 25;
let n3: number = 23;

console.log("Is 23 greater than 25? My answer is false");
console.log(n1 > n2);

console.log("\nIs 23 lesser than 25? My answer is true");
console.log(n1 < n2);

console.log("\nIs 23 greater than 23? My answer is false");
console.log(n1 > n3);

console.log("\nIs 25 greater than 25? My answer is false");
console.log(n2 > n2);

console.log("\nIs 23 equal to 25? My answer is false");
console.log(n1 > n2);

console.log("\nIs 23 equal to 23? My answer is true");
console.log(n1 == n3);

console.log("\nIs 25 equal to 25? My answer is true");
console.log(n2 == n2);

console.log("\nIs 25 - 23 = 5? My answer is false");
console.log(n2 - n1 == 5);

console.log("\nIs 23 - 23 = 0? My answer is true");
console.log(n1 - n3 == 0);

console.log("\nIs 25 + 23 = 48? My answer is false");
console.log(n1 + n2 == 48);

/* Assigment No. 24 */

/* 

More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings 

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

*/

console.log("\n<----------------------- Equality and Inequality ------------------------->\n");

let car1 = "Toyota";

console.log("car1 == Toyota : ", car1 == "Toyota");
console.log("car1 != Toyota : ", car1 != "Toyota");

console.log("\n<----------------------- Using LowerCase Function ------------------------->\n");

let car2 = "Civic";

console.log("car2.toLowerCase() == civic : ", car2.toLowerCase() == "civic");
console.log("car2.toLowerCase() == CIVIC : ", car2.toLowerCase() == "CIVIC");

console.log("\n<----------------------- Using AND / OR Gates ------------------------->\n");

let car3 = "BMW";

console.log("car3 == BMW && car2 == BMW : ", car3 == "BMW" && car2 == "BMW");
console.log("car2 == Civic && car2 == Civic : ", car2 == "Civic" && car2 == "Civic");
console.log("car3 == Toyota || car2 == Toyota : ", car3 == "Toyota" || car2 == "Toyota");
console.log("car1 == Civic || car2 == Civic : ", car1 == "Civic" || car2 == "Civic");

console.log(
  "\n<----------------------- Testing an item whether it is in an array ------------------------->\n"
);

let ARRAY = ["item1", "item2", "item3"];

console.log('ARRAY.includes("item1") : ', ARRAY.includes("item1"));
console.log('ARRAY.includes("item5") : ', ARRAY.includes("item5"));
