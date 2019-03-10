let re;
// Literal characters
re = /hello/;
re = /hello/i; // case  

// Metacharacters Symhols 
re = /^h/i;         // must starts with   
re = /d$/i;         // must ends with   
re = /world$/i;     // must ends with    
re = /^hello$/i;    // must begins adn ends with    
re = /h.llo$/i;     // matches any only ONE character    
re = /h*llo$/i;     // matches any character 0 or more times    
re = /gra?e?y/i;    // optional character (a is optional, e is optional)    
re = /gra?e?y\?/i;    // escape character ('gray?')





// Str to match
// let str = 'Hello World';
let str = 'gray?';
let result = re.exec(str);
console.log('from re.exec()', result);


function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.cource}`);
  } else {
    console.log('from reTest(re, str)', `${str} noes NOT match ${re.cource}`);
  }
}
reTest(re, str);