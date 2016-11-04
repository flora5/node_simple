


var user = {
	printFirstName: function(){
		console.log('My name is flora');
		console.log(this === user); //true
	}
}

user.printFirstName();

function hello(){
	console.log('\n...Hello...');
	console.log(this === global); //true
}

hello();