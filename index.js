$("h1").css("color", "grey");
$("h1").css("color");
$("button").text("click here");

// loop replacer in jQuery
$("button").click(function(){ 
	$("h1").css("color","purple");
	});
//keypress
$(document).keypress(function(event){
	var a= event.key;
	$("h1").text(a);
});
//mouseover
$("h1").on("mouseover", function(){ $("h1").css("color","red");});

//adding before and after text
// you can also use prepend("") and append("") which won't have spaces
$("h1").before("<button>New before button</button>");
$("h1").after("<button>New after button</button>");

/*remove
$("button").remove();*/
//animation
$("button").on("click",function(){
	/*$("h1").fadeOut();
	$("h1").fadeIn();
	$("h1").fadeToggle();*/
	
	$("h1").animate({margin:'20%'});
	$("h1").slideUp().slideDown().animate({opacity: 0.5});
});