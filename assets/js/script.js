//@prepros-prepend vendor/enquire.js

$(document).ready(function(){
	var $body = $("body"),
		$burgerNav = $("#burger-nav");

	$burgerNav.click(function(e){
		e.preventDefault();
		$body.toggleClass("burger-nav-active");
	});

});

//Phablet - 38.75em
var phablet = "38.75em";

//Desklet - 55.625em
var desklet = "55.625em";

enquire.register("screen and (min-width:" + phablet + ")", {

    // OPTIONAL
    // If supplied, triggered when a media query matches.
    match : function() {

    	//alert("Phab!");
    },      
                                
    // OPTIONAL
    // If supplied, triggered when the media query transitions 
    // *from a matched state to an unmatched state*.
    unmatch : function() {},    
    
    // OPTIONAL
    // If supplied, triggered once, when the handler is registered.
    setup : function() {
    	//alert("Phab setup");
    },    
                                
    // OPTIONAL, defaults to false
    // If set to true, defers execution of the setup function 
    // until the first time the media query is matched
    deferSetup : true,
                                
    // OPTIONAL
    // If supplied, triggered when handler is unregistered. 
    // Place cleanup code here
    destroy : function() {}
      
});

enquire.register("screen and (min-width:" + desklet + ")", {

    // OPTIONAL
    // If supplied, triggered when a media query matches.
    match : function() {
    	//alert("Desk!");
    },      
                                
    // OPTIONAL
    // If supplied, triggered when the media query transitions 
    // *from a matched state to an unmatched state*.
    unmatch : function() {},    
    
    // OPTIONAL
    // If supplied, triggered once, when the handler is registered.
    setup : function() {},    
                                
    // OPTIONAL, defaults to false
    // If set to true, defers execution of the setup function 
    // until the first time the media query is matched
    deferSetup : true,
                                
    // OPTIONAL
    // If supplied, triggered when handler is unregistered. 
    // Place cleanup code here
    destroy : function() {}
      
});