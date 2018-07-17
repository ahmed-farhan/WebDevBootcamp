var todos = [];
//using this setTimeout function because by default chrome
//loads the javascript before loading the html
//this timeout function adds a half a second delay to give the
//html time to load before the js is loaded
window.setTimeout(function(){	
	var input = prompt("What would you like to do?");

	while(input !== "quit"){
		//handle input
		if (input === "list") {
			listTodos();
		} else if (input === "new") {
			addTodo();
		} else if (input === "delete"){
			deleteTodo();
		}
		//ask again for new input
		input = prompt("What would you like to do?");
	}
	console.log("Okay, you quit the app");

	//Operational Functions
	function listTodos(){
		console.log("**********")
		todos.forEach(function(todo, i){
			console.log(++i + ": " + todo);
		})
		console.log("**********")
	}

	function addTodo(){
		//ask for new todo
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
		console.log("Added Todo");
	}

	function deleteTodo(){
		//ask for index of todo to be deleted
		var index = Number(prompt("Enter the number of the item to be deleted"))

		//delete that todo
		//splice(index position of item to be deleted, how many elements from the index point to be deleted)
		todos.splice(index-1, 1); 
		console.log("Deleted Todo");
	}
}, 500);