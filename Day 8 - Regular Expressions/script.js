// To use RegExp in JavaScript either we use RegExp constructor or we can declare a RegExp pattern using two forward slashes followed by a flag.
// We can create a pattern in two ways.

// To declare a string we use a single quote, double quote a backtick to declare a regular expression we use two forward slashes and an optional flag. 
// The flag could be g, i, m, s, u or y.

// A regular expression takes two parameters. One required search pattern and an optional flag.

// A pattern could be a text or any form of pattern which some sort of similarity. For instance the word spam in an email could be a 
// pattern we are interested to look for in an email or a phone number format number might be our interest to look for.

// Flags are optional parameters in a regular expression which determine the type of searching.
// Let us see some of the flags:
// g: a global flag which means looking for a pattern in whole text
// i: case insensitive flag(it searches for both lowercase and uppercase)
// m: multiline

// ---------------------------------------------

// Creating a pattern with RegExp Constructor

var regEx = new RegExp('love', 'gi') // RegExp(pattern, flag)

// Creating a pattern without RegExp Constructor

var regEx = /love/gi // /pattern/flag

// RegExp Object Methods

// test() : Tests for a match in a string. Returns True if matches.

const str = "I love JS"

var result = regEx.test(str)
console.log(result) // true

const pattern = /love/
var result2 = pattern.test(str)
console.log(result2) // true

// match(): Returns an array containing all of the matches, including capturing groups or null,
// If we do not use a global flag, match() returns an array containing the pattern, index, input and group.


var result = str.match(pattern)
console.log(result) // ["love", index: 2, input: "I love JavaScript", groups: undefined]

var result  = str.match(regEx)
console.log(result) // [love]


// search(): Tests for a match in a string. It returns the index of the match or -1 if it fails.

var result = str.search(pattern)
console.log(result)

// replace(): Executes a search for a match in a string, and replaces the matched with a replacement substring.
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)


const txt2 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt2.replace(/%/g, '')
console.log(matches)  

// You may check more RegEX options online
// []: A set of characters
// [a-c] means, a or b or c
// [a-z] means, any letter a to z
// [A-Z] means, any character A to Z
// [0-3] means, 0 or 1 or 2 or 3
// [0-9] means any number 0 to 9
// [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9