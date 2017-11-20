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

$(document).mouseup(function (e) {
	var menuBlock = $(".menu nav"),
		closeBtn = $(".menu nav a.close-btn");
	if (!menuBlock.is(e.target) && closeBtn.has(e.target).length === 0){
		$('.burger').removeClass('active');
		$('.menu').removeClass('active');
	}
});