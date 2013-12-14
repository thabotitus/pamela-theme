// Gumby is ready to go
Gumby.ready(function() {
	Gumby.log('Gumby is ready to go...', Gumby.dump());

	// placeholder polyfil
	if(Gumby.isOldie || Gumby.$dom.find('html').hasClass('ie9')) {
		$('input, textarea').placeholder();
	}

	// skip link and toggle on one element
	// when the skip link completes, trigger the switch
	$('#skip-switch').on('gumby.onComplete', function() {
		$(this).trigger('gumby.trigger');
	});

	var $word1	= $('#welcome').find('p.curve-up').hide();
	var $word2	= $('#welcome').find('p.curve-down').hide();

	$word1.show().arctext({radius: 148, dir: 1});
	$word2.show().arctext({radius: 148, dir: -1});

	$('.unslide').unslider({
		speed: 800, 
		delay: 5000
	});

// Oldie document loaded
}).oldie(function() {
	Gumby.warn("This is an oldie browser...");

// Touch devices loaded
}).touch(function() {
	Gumby.log("This is a touch enabled device...");
});
