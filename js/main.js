$(function() {
	var swiper = new Swiper('.testimonials__slider', {
		slidesPerView: "auto",
	})

	console.log('hello')

	var mixer = mixitup('.questions__list')

	$('.questions__filter-btn').on('click', function() {
		$('.questions__filter-btn').addClass('button--grey')
		$(this).removeClass('button--grey')
	})

	$('.header__burger-btn').on('click', function(e) {
		e.preventDefault();
		$('.header__burger-menu').toggleClass('header__burger-menu--active')
	})

	$('.tools__list-link').on('click', function(e) {
		e.preventDefault()
		if ($(this).hasClass('tools__list-link--active')) {
			$(this).removeClass('tools__list-link--active')
			$(this).children('.tools__list-text').slideUp()
		} 
		else {
			$('.tools__list-link').removeClass('tools__list-link--active')
			$('.tools__list-text').slideUp()
			$(this).addClass('tools__list-link--active')
			$(this).children('.tools__list-text').slideDown()
		}
	})

	$('.questions__list-link').on('click', function(e) {
		e.preventDefault()
		if ($(this).hasClass('questions__list-link--active')) {
			$(this).removeClass('questions__list-link--active')
			$(this).children('.questions__list-text').slideUp()
		} 
		else {
			$('.questions__list-link').removeClass('questions__list-link--active')
			$('.questions__list-text').slideUp()
			$(this).addClass('questions__list-link--active')
			$(this).children('.questions__list-text').slideDown()
		}
	})
})