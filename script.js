/*
	WEB 303 Assignment 1 - jQuery
	Nicholas Langley
	0106967
*/
$(function(){
	$('input').change(function(){
	let $amount = $('#amount');
	let $salary = $('#yearly-salary').val();
	let $spendPercent = $('#percent').val();
	$amount.text('$' + ($salary * ($spendPercent / 100)).toFixed(2));
	});
});
