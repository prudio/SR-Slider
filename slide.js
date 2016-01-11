"use strict";

var grid;
var start_pos;
var focus; //potential to add more boxes
var steps;
var container_xPos;

window.onload = function(){
	console.log("hello, world!");
	container_xPos = $("#game-container").position().left; 
	//use to find absolute postion of #command
	command_confirmed();
	focus = false;
	$("#command").click(function() {
  		console.log("clicked on command");// - focus system works
  		//$( "#game-container" ).keydown();
		focus = true;
		console.log("box xPos onload: " + $("#command").position().left)
		console.log("box yPos start: " + $("#command").position().top);
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
		if(focus){
			console.log("handler for .keypress() called");
			//console.log( event.keyCode );
			focus = false;
			animate(event.keyCode);
		} else {
			console.log("you can't do that");
		}
	});
}

function animate(code){
	console.log("code received : " + code);
	console.log("box xPos start: " + $("#command").position().left);
	console.log("box yPos start: " + $("#command").position().top);
	if(code == 37){
		$("#command").animate({
			left: '-=50px'
		}, function(){
			console.log("all done!");
			focus = true;
			console.log("box xPos end: " + $("#command").position().left);
			console.log("box yPos end: " + $("#command").position().top);
		});
		steps++;
	} else if (code == 38){
		$("#command").animate({
			bottom: '+=50px'
		}, function(){
			console.log("all done!");
			focus = true;
			console.log("box xPos end: " + $("#command").position().left);
			console.log("box yPos end: " + $("#command").position().top);
		});
		steps++;
	} else if (code == 39){
		$("#command").animate({
			left: '+=50px'
		}, function(){
			console.log("all done!");
			focus = true;
			console.log("box xPos end: " + $("#command").position().left);
			console.log("box yPos end: " + $("#command").position().top);
		});
		steps++;
	} else if (code == 40){
		$("#command").animate({
			bottom: '-=50px'
		}, function(){
			console.log("all done!");
			focus = true;
			console.log("box xPos end: " + $("#command").position().left);
			console.log("box yPos end: " + $("#command").position().top);
		});
		steps++;
	}
	console.log("steps : " + steps);
}

/*
STEPS
1) command entered, keycode pulled
2) check double-array to see how far block can move
3) pass pixel amount and direction down to animate method, 
   or just call animate at the end of method

*/