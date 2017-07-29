window.onload = function(){
	console.log ("loaded?");
}

var prompts = [
	'type your name',
	'type an adjective',
	'type a noun'
];

// alert(prompts.length);
// alert(prompts[0]);

$(document).ready(function(){

	$('.prompt').html(prompts[0]);
	
});

