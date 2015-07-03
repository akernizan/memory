console.log('hello');

var redBox = document.getElementById('red');
var yellowBox = document.getElementById('yellow');
var greenBox = document.getElementById('green');
var blueBox = document.getElementById('blue');

var clicked = true;

var init = function(){
	$('#red').on('click', function(){
		// var boxChange = setInterval(function(){
			redBox.style.background = "rgba(255,0,0, 0.5)";
			
		// }, 500)
		// clearInterval(boxChange);
	});

	$('#green').on('click', function(){
		// var boxChange = setInterval(function(){
			greenBox.style.background = "rgba(0,128,0,0.5)";
			
		// }, 500)
		// clearInterval(boxChange);
	});

	$('#yellow').on('click', function(){
		// var boxChange = setInterval(function(){
			yellowBox.style.background = "rgba(255,255,0,0.5)";
			
		// }, 500)
		// clearInterval(boxChange);
	});

		$('#blue').on('click', function(){
		// var boxChange = setInterval(function(){
			blueBox.style.background = "rgba(0,0,255,0.5)";
			
		// }, 500)
		// clearInterval(boxChange);
	});
}



window.onload = function() {
	init();
};