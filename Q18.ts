/* Assignment No. 18 */

/* 

Seeing the World: Think of at least five places in the world you’d like to visit. 

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

*/

let places = ["Makkah", "Abotabad", "Kashmir", "Murree", "Naran"];

console.log("\n<---------------------- Original Array ---------------------->\n");

console.log(places); // shows the orginal array

console.log("\n<-------------------- Alphabetical Order -------------------->\n");

let ordered_places = [...places].sort(); // Using spread operators to make a shallow copy of array so that the original order does not change
console.log(ordered_places); // shows the ordered array

console.log("\n<---------------------- Original Array ---------------------->\n");

console.log(places); // shows the original array

console.log("\n<---------------------- Reversed Order ---------------------->\n");

console.log(places.reverse()); // permenantly reversing the order stored in original array

console.log("\n<------------------- Again Reversed Order ------------------->\n");

console.log(places.reverse()); // again permenantly reversing the order of the array so that it can be in its original form

console.log("\n<--------------- Permanent Alphabetical Order --------------->\n");

console.log(places.sort()); // Permanently Sorting the array in alphabetical order

console.log("\n<---------------------- Original Array ---------------------->\n");

console.log(places); // shows the original array

console.log("\n<----------------- Permanent Reversed Order ----------------->\n");

console.log(places.reverse()); // permenantly reversing the order of the array

console.log("\n<---------------------- Original Array ---------------------->\n");

console.log(places); // shows the original array
