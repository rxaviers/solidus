$(function() {

	$(window).scroll(function() {

		if ($('body').scrollTop() > ($('header').outerHeight() - $('.bar').outerHeight()))
			$('body').addClass('sticky');
		else
			$('body').removeClass('sticky');

	});

});