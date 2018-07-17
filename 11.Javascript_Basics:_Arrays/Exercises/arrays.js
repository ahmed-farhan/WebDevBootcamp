var numbers = [1, 2, 3, 4, 5, 6];
var letters = ["a", "b", "c", "d"];
var uniform = ["q", "q", "q"];

//takes an array as an argument an prints out the elements
//in the array in the reverse order
function printReverse(array){
	for(var i = array.length - 1; i >= 0; i--){
		console.log(array[i]);
	}
}

//takes an array as an argument and returns
//true if all elements in the array are identical
function isUniform(array){
	var firstElem = array[0];
	for(var i = 1; i < array.length; i++) {
		if(array[i] !== firstElem){
			return false;
		}
	}
	return true;
}

//accepts an array of numbers and returns the sum
//of all numbers in the array
function sumArray(array){
	var sum = 0;
	array.forEach(function(element) {
		sum += element;
	})
	return sum;
}

//accepts an array of numbers and returns the 
//maximum number in the array
function max(array) {
	var max = array[0];
	array.forEach(function(element) {
		if(element > max){
			max = element;
		}
	})
	return max;
}