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
	$('.portfolio a').click(function() {
		$('.portfolio-menu').toggleClass('active');
		$('.portfolio').toggleClass('active');
		return false;
	});

	var sliderLength = $('.main-concent figure img').length,
	counter = 0;
	setInterval(function() {
		if(counter < sliderLength-1) {
			$('.main-concent figure img.active').removeClass('active').next().addClass('active');
			counter++;
		} else {
			$('.main-concent figure img.active').removeClass('active');
			$('.main-concent figure img').eq(0).addClass('active');
			counter = 0;
		}
	}, 2000);
});

$(window).on('load', function() {
	$('.preloader').fadeOut();
	$('.app.main').removeClass('active');
});

$(document).mouseup(function (e) {
	var menuBlock = $(".menu nav"),
		closeBtn = $(".menu nav a.close-btn");
	if (!menuBlock.is(e.target) && menuBlock.has(e.target).length === 0){
		$('.burger').removeClass('active');
		$('.menu').removeClass('active');
	}
});