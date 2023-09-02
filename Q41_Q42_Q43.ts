/* Assigment No. 41 */

/*

Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

*/

const magician_names: string[] = ["Eric", "Alex", "John", "Sam", "Max"];

function show_magicians(magician: string[]) {
  for (const names of magician) {
    console.log(names);
  }
}

// show_magicians(magician_names);



/* Assigment No. 42 */

/*

Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

*/

function make_great(magician: string[]) {
  for (let i = 0; i < magician.length; i++) {
    magician[i] = "the Great " + magician[i];
  }
}

// make_great(magician_names);
// show_magicians(magician_names);



/* Assigment No. 43 */

/*

Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

*/

function make_great1(magicians: string[]) {
  const modifiedMagicians: string[] = [];

  for (let i = 0; i < magicians.length; i++) {
    modifiedMagicians.push("the Great " + magicians[i]);
  }

  return modifiedMagicians;
}

const magicianNamesWithGreat = make_great1([...magician_names]);

console.log("\n<--------------------Original Magician Names --------------------->\n");
show_magicians(magician_names);

console.log("\n<--------------------Modified Magician Names --------------------->\n");
show_magicians(magicianNamesWithGreat);
