// var response = prompt("Are we there yet?");

// while(response !== "yes" && response !== "yeah"){
// 	response = prompt("Are we there yet?");	
// }

// alert("Yay, we finally made it!");

//VERSION 2
var response = prompt("Are we there yet?");

while(response.indexOf("yes") === -1 && response.indexOf("yeah") === -1){
	var response = prompt("Are we there yet?");
}

alert("Yay, we finally made it!");