/* Assignment No. 14 */

/* 

Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner. 

*/

let people = ["Ali", "Ahmed", "Furqan", "Hamza", "Usman", "Faizan"];

console.log("\n<------------- Today's Guest List ------------->\n");

console.log(`${people[0]}\n${people[1]}\n${people[2]}\n${people[3]}\n${people[4]}\n${people[5]}`);

console.log("\n<------------- Invitation Messages ------------->\n");

console.log(
  `Message 1: Hi ${people[0]}, I would like to invite you to a dinner party at 8pm tonight. Don't be late.\n`
);

console.log(
  `Message 2: Hi ${people[1]}, I would like to invite you to a dinner party at 8pm tonight. Don't be late.\n`
);

console.log(
  `Message 3: Hi ${people[2]}, I would like to invite you to a dinner party at 8pm tonight. Don't be late.\n`
);

console.log(
  `Message 4: Hi ${people[3]}, I would like to invite you to a dinner party at 8pm tonight. Don't be late.\n`
);

console.log(
  `Message 5: Hi ${people[4]}, I would like to invite you to a dinner party at 8pm tonight. Don't be late.\n`
);

console.log(
  `Message 6: Hi ${people[5]}, I would like to invite you to a dinner party at 8pm tonight. Don't be late.`
);

/* Assignment No. 15 */

/* 

Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite. 

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.

*/

console.log("\n<------------- People Not Coming Today ------------->\n");

console.log(
  `Due to some reason ${people.pop()} cannot come today. Instead of him, a new person will be joining with us.`
);

console.log("\n<------------- New Guest List ------------->\n");

people.push("Fahad"); // adds a person at the end of array

console.log(`${people[0]}\n${people[1]}\n${people[2]}\n${people[3]}\n${people[4]}\n${people[5]}`);

console.log("\n<------------- New Invitation Messages ------------->\n");

console.log(
  `Message 1: Hi ${people[0]}, I would like to invite you to a dinner party at 8pm tonight. Don't be late.\n`
);

console.log(
  `Message 2: Hi ${people[1]}, I would like to invite you to a dinner party at 8pm tonight. Don't be late.\n`
);

console.log(
  `Message 3: Hi ${people[2]}, I would like to invite you to a dinner party at 8pm tonight. Don't be late.\n`
);

console.log(
  `Message 4: Hi ${people[3]}, I would like to invite you to a dinner party at 8pm tonight. Don't be late.\n`
);

console.log(
  `Message 5: Hi ${people[4]}, I would like to invite you to a dinner party at 8pm tonight. Don't be late.\n`
);

console.log(
  `Message 6: Hi ${people[5]}, I would like to invite you to a dinner party at 8pm tonight. Don't be late.`
);

console.log("\n<--------------------------------------------------->\n");

/* Assignment No. 16 */

/* 

More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. 

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. 

*/

console.log(
  "Hey Guys!!! We recently found a bigger dinner table, so more space is available now. Three more guests will be coming now"
);

people.unshift("Mustafa"); // Adds a person in the beginning of array
people.splice(2, 0, "Kamran"); // Adds a person in the middle of array
people.push("Shakeel"); // Adds a person at the end of array

console.log("\n<------------- New Guest List ------------->\n");

console.log(
  `${people[0]}\n${people[1]}\n${people[2]}\n${people[3]}\n${people[4]}\n${people[5]}\n${people[6]}\n${people[7]}\n${people[8]}`
);

console.log("\n<--------------------------------------------------->\n");

/* Assignment No. 17 */

/* 

Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests. 

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

*/

console.log(
  "I am really sorry to say that the new dinner table we found won't arrive on time and I have space for only two people."
);

console.log("\n<------------- Removing Guests from the List ------------->\n");

console.log(`Sorry ${people.pop()}, You won't be coming tonight due to shortage of seats.\n`);
console.log(`Sorry ${people.pop()}, You won't be coming tonight due to shortage of seats.\n`);
console.log(`Sorry ${people.pop()}, You won't be coming tonight due to shortage of seats.\n`);
console.log(`Sorry ${people.pop()}, You won't be coming tonight due to shortage of seats.\n`);
console.log(`Sorry ${people.pop()}, You won't be coming tonight due to shortage of seats.\n`);
console.log(`Sorry ${people.pop()}, You won't be coming tonight due to shortage of seats.\n`);
console.log(`Sorry ${people.pop()}, You won't be coming tonight due to shortage of seats.`);

console.log("\n<--------------------------------------------------->\n");

console.log(`Hey ${people[0]} ! You are still invited to the dinner.\n`);
console.log(`Hey ${people[1]} ! You are still invited to the dinner.`);

console.log("\n<--------------------------------------------------->\n");

people.pop();
people.pop();

console.log(`${people[0]} - This means that there are no more guests in the list.`);

console.log("\n<--------------------------------------------------->\n");

/* Assignment No. 19 */

/* Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner. */

console.log(`Total Number of people coming : ${people.length}`);
