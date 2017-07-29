window.onload = function(){
	console.log ("loaded?");
}

var currentPrompt = 0;

var prompts = [
	'type your name',
	'type an adjective',
	'type a noun'
];

// alert(prompts.length);
// alert(prompts[0]);

$(document).ready(function(){

	var nextPrompt = function() {	
		if (currentPrompt < prompts.length) {	

			$('.prompt').html(prompts[currentPrompt]);
			currentPrompt ++;
		} else {
			$('.prompt').html("that's all for now");
		}
	} 

	$('button').click(function(){
		nextPrompt();
	});


	nextPrompt();

});



	// function nextPrompt(){
	// 	prompts[] = (prompts[currentPrompt]);
	// 	$('.prompt').html(prompts[]);
	// }