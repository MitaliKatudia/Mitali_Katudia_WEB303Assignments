/*
	WEB 303 Assignment 1 - jQuery
	Mitali Katudia
*/

$(document).ready(function() {

//	$("input").keyup(function() {
	$("input").change(function() {
		var Salary = $("#yearly-salary").val();
		var Percent = $("#percent").val();

		var result = (Salary * Percent)/ 100;
		result = result.toFixed();
		
		$("#amount").text('$'+ result);
	  });
});