//Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(450, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

//Adds new todo element to list when something is typed 
//into the input box and the enter key is pressed
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");

		//create new todo and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")

	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})