var App = (function(){
	'use strict';

	const baseWidth = 400;

	var growBox = document.querySelectorAll('.innerBox');
	var circle = document.querySelectorAll('.circle');
	var innerCircle = document.querySelectorAll('.inner-circle');
	var colorArray = ['#E74C3C', '#657A7B', '#A93A4A'];
	var count;
	var growBoxCount = 0;
	//var width = 3.3;
	var time = 10;
	var increments;
	var interVal;

	var init = function(){
		startTimer();
	}

	var startTimer = function() {
		console.log('Starting Timer...');
		increments = baseWidth/time;
		count = 0;
		interVal = setInterval(function(){
		    count++;
		    var incrementWidth = increments*count;
		    if(count <= time){
		      growBox[growBoxCount].style.width = incrementWidth + 'px'; 
		      circle[growBoxCount].style.borderColor = colorArray[growBoxCount];
		      innerCircle[growBoxCount].style.backgroundColor = colorArray[growBoxCount];
		      console.log('Length', incrementWidth);
		    }else{
		      sendRequest();
		      killInterval();
		    }
		    console.log(count);
		}, 1000); 
	}

	var sendRequest = function(){
		var ajax = new XMLHttpRequest();
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 4 && ajax.status == 200) {
				var response = JSON.parse(ajax.responseText);
			}
		};
		ajax.open('POST', '/ajax', true);
		ajax.setRequestHeader("Content-type", "application/json");
		ajax.send(JSON.stringify({'textValue': 'test'}));
	}
	
	var killInterval = function(){
	  clearInterval(interVal);
	  if(growBoxCount < growBox.length-1){
	  	growBoxCount++;
	  	startTimer();
	  }
	};

	return{
		init: init
	}

}());

window.addEventListener('DOMContentLoaded', function(){
	App.init();
})