/* global d3 */
/* global scrollama */

// using d3 for convenience, and storing a selected elements
var $container = d3.select('#scrolly02');
var $figure = container.select('.scrolly02figure');
var $article = container.select('#scrolly02article');
var $step = text.selectAll('.scrolly02step');

// initialize the scrollama
var scroller = scrollama();

// resize function to set dimensions on load and on page resize
function handleResize() { ... }

// scrollama event handlers
function handleStepEnter(response) { ... }

function handleContainerEnter(response) { ... }

function handleContainerExit(response) { ... }

// kick-off code to run once on load
function init() {...}

// start it up
init();

function init() {
	// 1. call a resize on load to update width/height/position of elements
	handleResize();

	// 2. setup the scrollama instance
	// 3. bind scrollama event handlers (this can be chained like below)
	scroller
		.setup({
			container: '#scrolly02', // our outermost scrollytelling element
			figure: '#scrolly02figure', // the graphic
			article: '#scrolly02article', // the step container
			step: '#scrolly02article .scrolly02step', // the step elements
			offset: 0.5, // set the trigger to be 1/2 way down screen
			debug: true, // display the trigger offset for testing
		})
		.onStepEnter(handleStepEnter)
		.onContainerEnter(handleContainerEnter)
		.onContainerExit(handleContainerExit);

	// setup resize event
	window.addEventListener('resize', handleResize);
}

function handleResize() {
	// 1. update height of step elements for breathing room between steps
	var stepHeight = Math.floor(window.innerHeight * 0.75);
	$step.style('height', stepHeight + 'px');

	// 2. update height of graphic element
	var bodyWidth = d3.select('body').node().offsetWidth;

	$figure
		.style('height', window.innerHeight + 'px');

	// 3. update width of chart by subtracting from text width
	var figureMargin = 32;
	var articleWidth = $article.node().offsetWidth;
	var figureWidth = $figure.node().offsetWidth - articleWidth - figureMargin;
	// make the height 1/2 of viewport
	var chartHeight = Math.floor(window.innerHeight / 2);

	$figure
		.style('width', chartWidth + 'px')
		.style('height', chartHeight + 'px');

	// 4. tell scrollama to update new element dimensions
	scroller.resize();
}