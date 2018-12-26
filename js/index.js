$(document).ready(function(){
	$('.slider-info').slick({
  		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-title'
  	});
  	$('.slider-title').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		asNavFor: '.slider-info',
  		dots: false,
  		focusOnSelect: true
  	});
  	$('.steps-slider__title').slick({
  		slidesToShow: 3,
	  	slidesToScroll: 1,
	 	dots: true,
	  	focusOnSelect: true,
	  	asNavFor: '.steps-slider',
  	});
  	$('.steps-slider').slick({
  		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-title',
		adaptiveHeight: true
  	});
  	$('.steps-one').slick({
  		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true
  	});
  	$('.steps-two').slick({
  		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true
  	});
  	$('.workpage-content').slick({
  		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		dots: true,
  	});
  	$('.workpage-top-slider').slick({
  		slidesToShow: 3,
	  	slidesToScroll: 1,
	 	dots: true,
	  	focusOnSelect: true,
	  	asNavFor: '.workpage-slider',
  	});
  	$('.workpage-slider').slick({
  		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.workpage-top-slider',
  	});
  	
  	$('.about-block .header-nav__item_active').html($(".slick-current").html());
  	$(".workpage-top-slider__item").click(function() {
			$('.about-block .header-nav__item_active').html($(".slick-current").html());
		});
  	$('.about-block .header-nav__item_active').css('text-transform','lowercase');

});