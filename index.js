/**
 * Created by flora on 11/4/16.
 */
var person = {
    firstName: "flora",
    lastName: 'bai',
    age: 15
};
console.log(person);

function hello(){
	console.log("**hello...");
};

var say_hello = function(){
	console.log("**Say hello...");

};

function hello_again(){
	console.log('hello');
	return 1;
}

console.log(hello()); //undefined
console.log(say_hello()); //undefined
console.log(hello_again()); //1

setTimeout(hello, 3000); // call hello function in 3 seconds

