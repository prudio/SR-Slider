$(function(){

	var transit;
	var mousedown;
	var boundXmin;
	var boundYmin;
	var boundXmax;
	var boundYmax;
	var downX;
	var downY;
	var main_box = $("#slider");

	function setBoard(){
		//alert($("#container").width());

	}

	function collectBounds(){
		console.log($("#container").offset());

		console.log($("#slider").position());

		boundXmin = $("#container").offset().left;
		boundYmin = $("#container").offset().top;

		var boX = $("#slider").position().left;
		var boY = $("#slider").position().top;

	}

	function calcDirection(upX, upY){
		var deltaX = upX - downX;
		var deltaY = upY - downY;
		if(Math.sqrt((deltaX*deltaX) + (deltaY*deltaY)) <= 19.9){
			return true;
		}

		var slope = deltaY / deltaX;
		var angle = Math.abs(Math.atan(deltaY / deltaX)*180/Math.PI);
		if(deltaX <= 0 && angle <= 15){
			slideLeft();
		} else if (deltaX > 0 && angle <= 15){
			slideRight();
		} else if (deltaY <= 0 && angle >= 75){
			slideUp();
		} else {
			slideDown();
		}
		collectBounds();
	}

	function slideRight(){
		console.log($(main_box).position());
		$("#slider").animate({
			left: '+=40px',
			easing: "easeOutElastic"
		}, 150, function(){
			console.log($(main_box).position());
		});
	}

	function slideLeft(){
		console.log($(main_box).position());
		$("#slider").animate({
			left: '-=40px',
			easing: "easeOutElastic"
		}, 150, function(){
			console.log($(main_box).position());
		});
	}

	function slideUp(){
		console.log($(main_box).position());
		$("#slider").animate({
			top: '-=40px',
			easing: "easeOutElastic"
		}, 150, function(){
			console.log($(main_box).position());
		});
	}

	function slideDown(){
		console.log($(main_box).position());
		$("#slider").animate({
			top: '+=40px',
			easing: "easeOutElastic"
		}, 150, function(){
			console.log($(main_box).position());
		});
	}

	$(document).keydown(function(event){
		if(transit === true){
			return;
		}
		transit = true;
		var	code = event.keyCode;
		//console.log("handler for .keypress() called : " + code);
		if(code == 37 || code == 65){
			slideLeft();
		} else if (code == 38 || code == 87){
			slideUp();
		} else if (code == 39 || code == 68){
			slideRight();
		} else if (code == 40 || code == 83){
			slideDown();
		}
		transit = false;
	});

	$(window).mousedown(function(){
		mousedown = true;
		downY = event.pageY;
		downX = event.pageX;
	});
	$(window).touchstart(function(){
		mousedown = true;
		downX = event.targetTouches[0].pageX;
		downY = event.targetTouches[0].pageY;
	});

	$(window).mousemove(function(){
		if(mousedown === false){return true;}
	});
	$(window).touchmove(function(){
		if(mousedown === false){return true;}
	});

	$(window).mouseup(function(){
		mousedown = false;
		calcDirection(event.pageX, event.pageY);
	});
	$(window).touchend(function(){
		mousedown = false;
		calcDirection(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
	});

	$(window).load(function(){
		setBoard();
		collectBounds();
		//slideDown();
		transit = false;
		mousedown = false;
	});

});