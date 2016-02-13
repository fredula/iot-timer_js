var App = (function(){
	'use strict';

	const baseWidth = 400;

	var growBox = document.querySelector('.innerBox');
	var count = 0;
	//var width = 3.3;
	var time = 10;
	var increments;
	var interVal;

	var init = function(){
		increments = baseWidth/time;
		console.log(increments, Math.ceil(increments));
		startTimer();
	}

	var startTimer = function() {
		interVal = setInterval(function(){
		    count++;
		    var incrementWidth = increments*count;
		    if(count <= time){
		      growBox.style.width = incrementWidth + 'px'; 
		      console.log('Length', incrementWidth);
		    }else{
		      killInterval();
		    }
		    console.log(count);
		}, 1000); 
	}
	
	var killInterval = function(){
	  clearInterval(interVal);
	};

	return{
		init: init
	}

}());

window.addEventListener('DOMContentLoaded', function(){
	App.init();
})