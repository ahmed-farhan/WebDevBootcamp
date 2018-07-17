window.setTimeout(function(){
	var listSize = Number(prompt("Enter a number"));
	var numList = [];
	for(var i = 0; i < listSize; i++){
		numList.push(i + 1);
	}
	for(var i = 0; i < numList.length; i++){
		if(numList[i] % 3 === 0){
			console.log(numList[i]);
		}
	}
}, 500);