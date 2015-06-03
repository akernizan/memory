console.log('hello');

var redBox = document.getElementById('red');
var yellowBox = document.getElementById('yellow');
var greenBox = document.getElementById('green');
var blueBox = document.getElementById('blue');

var init = function(){
	$('#red').on('click', function(){
		redBox.style.background = "rgba(255,0,0, 0.5)";
	});
}



window.onload = function() {
	init();
};