// let re = /hello/;
// let re = /hello/i;
// let re = /hello/g;
// i - 'case insensitive'
// g - 'search all matches'

// console.log(re);
// console.log(re.source);
// console.log(result.index); 
// console.log(result.input);


//Functions for RegExp

// exec() - Returns result array or null
// const result = re.exec('bob hello world'); //["hello", index: 4, input: "bob hello world"]
// console.log(result.index); // 4
// console.log(result.input); // 'bob hello world'


// test() returns true or false
// let result = re.test('hello'); // true
// let result = re.test('Hello'); // false
// console.log(result);  


// match() - Returns result array or null but takes a RegExp as parameter to sting
// let str = 'bob hello world';
// const result = str.match(re); //["hello", index: 4, input: "bob hello world"]
// console.log(result);


// search() - Returns the index of first match if not found returns -1
// let str = 'bob hello world';
// const result = str.search(re); // 4
// console.log(result);


// replace() - Returns a new string with replaced some or all matches
// let str = 'hello to all';
// const result = str.replace(re, 'Hi'); // 'Hi to all'
// console.log(result);
