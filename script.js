/*
	WEB 303 Assignment 1 - jQuery
	Mitali Katudia
*/
 // Document ready function to start 
$(document).ready(function() {

/*	$("input").keyup(function() { 
		//-> this is the keyup function but as the event fires everytime the key is up, 
    		it also outcomes incomplete calculation  */

		// Change function with input selection which selects both salary and percent's input value 
	$("input").change(function() {   
		
		// selected individual inputs with ID css selector and stored in a variable 
		var Salary = $("#yearly-salary").val();  
		var Percent = $("#percent").val();

		// the .val method gets the input from the HTML form submission 


		// calculation required for the result and stored in a local variable
		var result = (Salary * Percent)/ 100;
		result = result.toFixed(1);  // the toFixed() method will round off the result in the nearest decimal by two places
		
		// selected the span HTML tag and replaced the outcome
		$('#amount').text('$'+ result);
	  });
});