var $header = $('.header');
var $topspots = $('.topspots');
var $bob = $('.bob');
var $leaf = $('.leaf');
var $walleye = $('.walleye');
var $graph = $('.graph');
var $lakes = $('.lakes');
var $foot = $('.foot');

$header.waypoint(function (direction) {
  if (direction == 'down') {
    $header.addClass('js-header-animate');
  } else {
    $header.removeClass('js-header-animate');
  }
}, {offset: '-3%'});

$topspots.waypoint(function (direction) {
  if (direction == 'down') {
    $topspots.addClass('js-topspots-animate');
  } else {
    $topspots.removeClass('js-topspots-animate');
  }
}, {offset: '-30%'});

$('#bestspot').on('click',function() {

  var newName = prompt('Name that pointy sharp thing fishes hate for a treat.');

  if (newName == 'Hook') {
    alert('Duuude, youre on point check out this spot! 45.559969, -75.265515 Watch for poison ivy!');
  } else {
    alert('You is a slow fish.');
  }
});

$bob.waypoint(function (direction) {
  if (direction == 'down') {
    $bob.addClass('js-bob-animate');
  } else {
    $bob.removeClass('js-bob-animate');
  }
}, {offset: '-20%'});

$leaf.waypoint(function (direction) {
  if (direction == 'down') {
    $leaf.addClass('js-leaf-animate');
  } else {
    $leaf.removeClass('js-leaf-animate');
  }
}, {offset: '-15%'});

$walleye.waypoint(function (direction) {
  if (direction == 'down') {
    $walleye.addClass('js-walleye-animate');
  } else {
    $walleye.removeClass('js-walleye-animate');
  }
}, {offset: '-3%'});

$graph.waypoint(function (direction) {
  if (direction == 'down') {
    $graph.addClass('js-graph-animate');
  } else {
    $graph.removeClass('js-graph-animate');
  }
}, {offset: '-25%'});

$lakes.waypoint(function (direction) {
  if (direction == 'down') {
    $lakes.addClass('js-lakes-animate');
  } else {
    $lakes.removeClass('js-lakes-animate');
  }
}, {offset: '-25%'});

$foot.waypoint(function (direction) {
  if (direction == 'down') {
    $foot.addClass('js-foot-animate');
  } else {
    $foot.removeClass('js-foot-animate');
  }
}, {offset: '90%'});

