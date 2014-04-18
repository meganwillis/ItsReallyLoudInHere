$(document).ready(function(){
	var $body = $("body"),
		$burgerNav = $("#burger-nav");

	$burgerNav.click(function(e){
		e.preventDefault();
		$body.toggleClass("burger-nav-active");
	});

});