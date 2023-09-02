/* Assignment No. 29 */

/*

Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

*/

let favorite_fruits = ["Apple", "Banana", "Mango"];

if (favorite_fruits.includes("Apple")) {
  console.log("You really like apples");
}

if (favorite_fruits.includes("Banana")) {
  console.log("You really like bananas");
}

if (favorite_fruits.includes("Mango")) {
  console.log("You really like maongoes");
}

if (favorite_fruits.includes("Melon")) {
  console.log("You really like melons");
}

if (favorite_fruits.includes("Berry")) {
  console.log("You really like berries");
}
