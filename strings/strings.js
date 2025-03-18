// Extract characters
let a = 'extravaganza'
console.log(a.slice(-4,));

// inserting a string
let food = "The quick fox jumped over the lazy dog";
let str2 = "eat";
let idx = 4;
let response = food.substring(0, idx) + str2 + food.substring(idx);
console.log(response);


// how many times a string appears
let story = 'The quick brown fox jumps over the lazy dog'
function countOccurrences(text, word) {
    return text.toLowerCase().split(word.toLowerCase()).length - 1;
}
console.log(countOccurrences(story, "the"));   
console.log(countOccurrences(story, "brown")); 


// find strings
let string1 = "The pupils are reading in the library";
let string2 = "The child was sitting on the table before it fell";
let text1 = string1.includes("are") ? "are" : "not found";
let text2 = string2.includes("sitting") ? "sitting" : "not found";
console.log(text2); 
console.log(text1); 


// convert strings to uppercase
let text = 'wonderful'
let result = text.toUpperCase();
console.log(result);


//  convert strings to lowercase

let y = "amazing"
let z  = y.toLowerCase();
console.log({y});

let x = 'UndERneath'
let w = x.toLowerCase();
console.log({w});


//  convert strings to title case

let e = 'A wonderful world'
let q = e.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

console.log(q);
