function isEven(num) {
	if(num % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

function factorial(num){
	if(num < 0){
		return "Error";
	}else if(num === 0) {
		return 1;
	}else {
		var result = 1;
		for(var i = num; i >= 1; i--){
			result *= i;
		}
		return result;
	}
}

function kebabToSnake(word){
	var rstr = word.replace(/-/g , "_");
	return rstr;
}