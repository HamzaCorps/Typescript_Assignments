/* Assignment No. 36 */

/*

T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

*/

function make_shirt(size: string, text: string) {
  console.log(
    `The Size of the shirt is : "${size}", and the message to be printed on the shirt is "${text}"\n`
  );
}

make_shirt("Small", "I like Typescript");

/* Assignment No. 37 */

/*

Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

*/

function make_shirt_1(text: string) {
  let default_size: string = "Large";
  console.log(
    `The Size of the shirt is : "${default_size}", and the message to be printed on the shirt is "${text}"\n`
  );
};

function make_shirt_2(size: string) {
    let default_message: string = "I really love Typescript";
    console.log(
      `The Size of the shirt is : "${size}", and the message to be printed on the shirt is "${default_message}"\n`
    );
  };

  function make_shirt_3(text: string) {
    let size: string = "Extra Large";
    console.log(
      `The Size of the shirt is : "${size}", and the message to be printed on the shirt is "${text}"\n`
    );
  };


make_shirt_1("I love Typescript");

make_shirt_2("Large");
make_shirt_2("Medium");

make_shirt_3("I am learning Typescript");


