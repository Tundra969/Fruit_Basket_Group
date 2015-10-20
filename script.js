$(document).ready(function(){
	addFruit("Apple", 1.50);
	addFruit("banana", 3.50);

	setInterval(function(){
		for (var i=0;i<fruitsArray.length;i++){
			generatePrice(fruitsArray[i]);
		}
		console.log(fruitsArray);
		updateDom();
	}, 1000);
	
	//console.log(fruitsArray);
	fruitOnDom();
});


var fruitsArray = [];

function MakeFruit(fruitName, fruitPrice){
	this.name = fruitName;
	this.price = fruitPrice;
}

function addFruit(fruitName, fruitPrice){
	fruitsArray.push(new MakeFruit(fruitName, fruitPrice));
}



function fruitOnDom(){
	for (var i = 0; i <fruitsArray.length; i++){
		$("#fruitContainer").append("<div class='fruit' id='" + fruitsArray[i].name + "'>fruitsArray[i].name</div>");
		var $el = $("#fruitContainer").children().last();

		$el.append("<div class='fruitprice'>" + fruitsArray[i].price +": " + fruitsArray[i].name + "</div>");
		console.log(fruitsArray[i].price);
	}
}

function updateDom(){
	for (var i=0; i < fruitsArray.length; i++){
	$("#" + fruitsArray[i].name).find('.fruitprice').text(fruitsArray[i].price);
	// console.log();
	}
}



function randomNumber(min, max) {
	return (Math.random() * (max - min) + min);
}

function generatePrice(fruit){
	//console.log(fruit.price);
	var change = (randomNumber(-0.50, 0.50));
		// if ()//not 0.00 and not above 9.99 or below 0.01

	var totalPrice = fruit.price + change;
	if (totalPrice > 9.99){
		totalPrice = fruit.price - change;
	} else if (totalPrice < 0.50){
		totalPrice = fruit.price - change;
	}
	fruit.price = totalPrice;
}