/* Assignment No. 30 */

/*

Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

*/

const UserNames = [
  {
    name: "admin",
  },
  {
    name: "employee_1",
  },
  {
    name: "employee_2",
  },
  {
    name: "employee_3",
  },
  {
    name: "employee_4",
  },
  {
    name: "employee_5",
  },
];

for (let i = 0; i < UserNames.length; i++) {
  if (UserNames[i].name == "admin") {
    console.log("Hello admin, would you like to see a status report?\n");
  } else if (UserNames[i].name != "admin") {
    console.log(`Hello ${UserNames[i].name}, thank you for logging in again.\n`);
  }
}

/* Assignment No. 31 */

/*

Mo Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.

*/

if(UserNames.length == 0){
  console.log("We need to find some users");
} else {
  UserNames.splice(0, UserNames.length);
  console.log(UserNames, "- This shows that the array is empty")
}