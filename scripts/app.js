window.onload = function(){
	console.log ("loaded?");
}
var answers = [];
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

		if (currentPrompt != 0) {
			answers.push($('input').val());
		}

		if (currentPrompt < prompts.length) {	
			//alert($('input').val());
			$('.prompt').html(prompts[currentPrompt] + '<br><input type="text">');
			currentPrompt ++;
		} else {
			//$('.prompt').html("that's all for now");
			showFinal();
		}
	} 

	var showFinal = function() {
		$('.prompt').html(answers[0] + ' ' + answers[1] + ' ' +answers[2]);
		$('button').hide();
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