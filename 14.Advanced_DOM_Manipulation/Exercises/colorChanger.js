var button = document.querySelector("input");
var body = document.querySelector("body");
var white = true;

// button.addEventListener("click", function(){
// 	if (white) {
// 		body.style.backgroundColor = "purple";
// 	} else {
// 		body.style.backgroundColor = "white";
// 	}
// 	white = !white;
// })

button.addEventListener("click", function(){
	body.classList.toggle("purple");
})