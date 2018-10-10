$(document).ready(function() {
	try {
		$('body').ripples({
			resolution: 550,
			dropRadius: 20, //px
			perturbance: 20,
		});
		
	}
	catch (e) {
		$('.error').show().text(e);
	}

	$('.js-ripples-disable').on('click', function() {
		$('body').ripples('destroy');
		$(this).hide();
	});

	$('.js-ripples-play').on('click', function() {
		$('body').ripples('play');
	});

	$('.js-ripples-pause').on('click', function() {
		$('body').ripples('pause');
	});

	// Automatic drops
	 
});