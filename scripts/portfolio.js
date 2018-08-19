// Global Variables


// DOM Variables
// Event function
// JQuery functions
// Handles the smooth scrolling using jQuery, smooth scroll and local scroll
$(document).ready(function(){
	$("nav").localScroll({duration:500});
	$("#home-content").localScroll({duration:500});
});

//Functionality for the mobile nav bar
$(document).ready(function(){
	$("#mobile-nav-toggle").click(function(){
		$(".nav-items-wrapper").toggleClass("display");
	})
});
