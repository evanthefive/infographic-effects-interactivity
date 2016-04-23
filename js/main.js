var $header = $('.header');

$header.waypoint(function (direction) {
	if (direction == 'down') {
		$header.addClass('js-header-animate');
	} else {
		$header.removeClass('js-header-animate');
	}
}, { offset: '-3%' });




var $topspots = $('.topspots');

$topspots.waypoint(function (direction) {
	if (direction == 'down') {
		$topspots.addClass('js-topspots-animate');
	} else {
		$topspots.removeClass('js-topspots-animate');
	}
}, { offset: '-30%' });


var $bob = $('.bob');

$bob.waypoint(function (direction) {
	if (direction == 'down') {
		$bob.addClass('js-bob-animate');
	} else {
		$bob.removeClass('js-bob-animate');
	}
}, { offset: '-20%' });



var $leaf = $('.leaf');

$leaf.waypoint(function (direction) {
	if (direction == 'down') {
		$leaf.addClass('js-leaf-animate');
	} else {
		$leaf.removeClass('js-leaf-animate');
	}
}, { offset: '-15%' });



var $walleye = $('.walleye');

$walleye.waypoint(function (direction) {
	if (direction == 'down') {
		$walleye.addClass('js-walleye-animate');
	} else {
		$walleye.removeClass('js-walleye-animate');
	}
}, { offset: '-3%' });


var $graph = $('.graph');

$graph.waypoint(function (direction) {
	if (direction == 'down') {
		$graph.addClass('js-graph-animate');
	} else {
		$graph.removeClass('js-graph-animate');
	}
}, { offset: '-25%' });

var $lakes = $('.lakes');

$lakes.waypoint(function (direction) {
	if (direction == 'down') {
		$lakes.addClass('js-lakes-animate');
	} else {
		$lakes.removeClass('js-lakes-animate');
	}
}, { offset: '-25%' });



var $foot = $('.foot');

$foot.waypoint(function (direction) {
	if (direction == 'down') {
		$foot.addClass('js-foot-animate');
	} else {
		$foot.removeClass('js-foot-animate');
	}
}, { offset: '90%' });

