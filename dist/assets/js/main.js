$(document).ready(function() {
	$('.burger').click(function() {
		$('.burger').toggleClass('active');
		$('.menu').toggleClass('active');
	});
	$('.icon-close').click(function() {
		$('.burger').toggleClass('active');
		$('.menu').toggleClass('active');
	});
});