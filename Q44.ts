/* Assignment No. 44 */

/*

Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

*/

const items1 = ["Chicken", "Cheese", "Mayoneese"];
const items2 = ["Cheese", "Mayoneese"];
const items3 = ["Chicken", "Pepper", "Mayoneese", "Cheese"];

function ingrediants(item: string[]) {
  console.log("\n<-------------------- Toppings ------------------------>\n");
  for (let i = 0; i < item.length; i++) {
    console.log(`${i}: ${item[i]}`);
  }
}

ingrediants(items1);
ingrediants(items2);
ingrediants(items3);
