
function placeOrder(orderNumber){
	console.log("Customer order:", orderNumber);
	cookAndDeliverFood(function(){
		console.log("Delivered food order:", orderNumber);
	});
	
}

function cookAndDeliverFood(callback){
	setTimeout(callback, 5000);
}

placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);
placeOrder(6);