window.onload = function(){
	console.log ("loaded?");
}
var answers = [];
var currentPrompt = 0;

var prompts = [
	'type a noun',
	'type a state',
	'type a verb',
	'type a noun',
	'type a proper name',
	'type a verb',
	'type a noun',
	'type a verb',
	'type a noun',
	'type a part of the body',
	'type a adjective',
	'type a adjective',
	'type a relative',
	'type a activity',
	'type a chain restaurant',
	'type a adjective in past tense',
	'type a month',
	'type a verb',
	'type a noun',
	'type a verb in past tense',
	'type a adjective',
	'type a verb',
	'type a plural noun'
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
		} 

		else {
			//$('.prompt').html("that's all for now");
			showFinal();
		}
	} 

	var showFinal = function() {
		$('.prompt').html('A <span class="fill">' +
			answers[0]+ ' </span> in <span class="fill">' + 
			answers[1] + '</span> was arrested this morning after he<span class="fill"> ' 
			+answers[2]+'</span> in front of a <span class="fill">' +
			answers[3]+ ' </span>. <span class="fill">' +
			answers[4]+ ' </span>, had a history of <span class="fill">' +
			answers[5]+ ' </span>, but no one - not even his <span class="fill">' +
			answers[6]+ ' </span> ever imagined he would <span class="fill">' +
			answers[7]+ ' </span> with a <span class="fill">' +
			answers[8]+ ' </span> stuck in his <span class="fill">' +
			answers[9]+ ' </span> <p>Witness statement: <em>"I always thought he was <span class="fill">' +
			answers[10]+ ' </span>, but I never thought he would do something like this!!!</em>"</p> Even his <span class="fill">' +
			answers[11]+ ' </span> was surprised. After a brief <span class="fill">' +
			answers[12]+ ' </span>, cops followed him to a <span class="fill">' +
			answers[13]+ ' </span>, where he reportedly <span class="fill">' +
			answers[14]+ ' </span> in the fry machine. <p>In <span class="fill">' +
			answers[15]+ ' </span>, a woman was charged with a similar crime. But rather than <span class="fill">' +
			answers[16]+ ' </span> with a <span class="fill">' +
			answers[17]+ ' </span>, she <span class="fill">' +
			answers[18]+ ' </span> with a <span class="fill">' +
			answers[19]+ ' </span> dog. Either way, we imagine that after witnessing him <span class="fill">' +
			answers[20]+ ' </span> with a <span class="fill">' +
			answers[21]+ ' </span> there are probably a whole lot of <span class="fill">' +
			answers[22]+ ' </span> that are going to need some therapy.</p>');
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