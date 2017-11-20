$(document).ready(function() {
	$('.burger').click(function() {
		$('.burger').toggleClass('active');
		$('.menu').toggleClass('active');
	});
	$('.close-btn').click(function() {
		$('.burger').toggleClass('active');
		$('.menu').toggleClass('active');
		return false;
	});
});

$(window).on('load', function() {
	$('.preloader').fadeOut();
	$('.app.main').removeClass('active');
});