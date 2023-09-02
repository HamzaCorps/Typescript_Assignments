/* Assignment No. 38 */

/*

Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

*/

function describe_city(city: string, country: string) {
  console.log(`${city} is the capital of ${country}\n`);
}

function describe_city1(city: string, country = "Pakistan") {
  console.log(`${city} is one of the largest cities in ${country}\n`);
}

describe_city("New Delhi", "India");
describe_city1("Lahore");
describe_city1("Peshawer");

/* Assignment No. 39 */

/*

City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.

*/

function city_country(city:string, country:string){
    console.log(`${city},${country}`);
}

city_country("Lahore","Pakistan");
city_country("Karachi","Pakistan");
city_country("Islamabad","Pakistan");
