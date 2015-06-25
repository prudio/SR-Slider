"use strict";

var grid;
var start_pos;
var focus; //potential to add more boxes
var steps;
var minX; //container min
var minY; //container min
var curX; //box's current
var curY; //box's current

window.onload = function(){
	console.log("hello, world!");
	alert("click the black box to begin!");
	

	minX = $("#game-container").position().left; 
	minY = $("#game-container").position().top;
	//use minX to find absolute postion of #command (xPos is minX)
	curX = minX + 0; //make this dynamic for other levels...
	curY = minY + 0;


	//setup keystroke commands
	command_confirmed();


	focus = false;
	$("#command").hover(function(){
		//console.log("hovering in..");
		$(this).css("opacity", "0.75");
		$("body").css("cursor", "pointer");
	}, function(){
		//console.log("hover out");
		$(this).css("opacity", "1.0");
		$("body").css("cursor", "auto");
	});

	$("#command").click(function() {
  		alert("blue boxes can be controlled with the arrow keys..");// - focus system works
  		//$( "#game-container" ).keydown();
  		$("#command").css("background-color", "blue");
		focus = true;
	});
	steps = 0;
}

function grid_setup(){
	grid = [[1,2], [1,3], [3,4], [5,6]];
	console.log(grid[2][2]);
}

/*
KEYCODES

Up Arrow - 38
Left Arrow - 37
Down Arrow - 40
Right Arrow - 39

W - 87
A - 65
S - 83
D - 68
*/
function command_confirmed(){
	console.log("battlecruiser operational");
	$(document).keydown(function( event ){
		console.log("minY: " + minY + ", curY: " + curY);
		if(focus){
			console.log("handler for .keypress() called");
			//console.log( event.keyCode );
			focus = false;
			animate(event.keyCode);
		} else {
			console.log("you can't leave the grid");
			focus = true;
		}
	});
}

function animate(code){
	//console.log("code received : " + code);
	//console.log("box xPos start: " + $("#command").position().left);
	switch(code){
		case(37):
			if((curX - 50) >= minX){
				curX -= 50;
				$("#command").animate({
					left: '-=50px'
				}, function(){
					focus = true;
				});
				steps++;
			}
			break;
		case (38):
			if((curY - 50) >= minY){
				curY -= 50;
				$("#command").animate({
					bottom: '+=50px'
				}, function(){
					focus = true;
				});
				steps++;
			}
			break;
		case(39):
			if((curX + 50) < (minX + 500)){
				curX += 50;
				$("#command").animate({
					left: '+=50px'
				}, function(){
					focus = true;
				});
				steps++;
			}
			break;
		case(40):
			if((curY + 50) < (minY + 500)){
				curY += 50;
				$("#command").animate({
					bottom: '-=50px'
				}, function(){
					focus = true;
				});
				steps++;
			}
			break;
	}
	console.log("steps : " + steps);
}

/*
STEPS
1) command entered, keycode pulled
2) check double-array to see how far block can move??
3) pass pixel amount and direction down to animate method, 
   or just call animate at the end of method??

*/