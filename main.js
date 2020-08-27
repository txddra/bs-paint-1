/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to repeat, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}


/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

/*colors */
const first = document.querySelector('.palette-color.color-1')
const second = document.querySelector('.palette-color.color-2')
const third = document.querySelector('.palette-color.color-3')
const fourth = document.querySelector('.palette-color.color-4')
const fifth = document.querySelector('.palette-color.color-5')

/* the current color*/
const current = document.querySelector('.current-brush')

/*the square to be colored, 'the canvas'*/
const square = document.querySelectorAll('.square')
/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.

/* functions that will remove the current color and replace with the color chosen*/

/*first*/
const firstColor = function () {
  // removes the color previously selected
  current.classList.remove(current.classList[1]);
  // adds the color clicked on
  current.classList.add('color-1')
}

/*second*/
const secondColor = function () {
  current.classList.remove(current.classList[1]);
  current.classList.add('color-2')
}


/*third*/
const thirdColor = function () {
  current.classList.remove(current.classList[1]);
  current.classList.add('color-3')
}


/*fourth*/
const fourthColor = function () {
  current.classList.remove(current.classList[1]);
  current.classList.add('color-4')
}

/*fifth*/
const fifthColor = function () {
  current.classList.remove(current.classList[1]);
  current.classList.add('color-5')
}
/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.


//we make a new name for the event listener, add it, and call it with a click, and this will change the color of the square with the paintbrush

/* first*/
first.addEventListener('click', firstColor);

/*second*/
second.addEventListener('click', secondColor);

/*third*/
third.addEventListener('click', thirdColor);

/*fourth*/
fourth.addEventListener('click',fourthColor);

/*fifth*/
fifth.addEventListener('click',fifthColor);

const clickColor = function(event){
  event.target.classList.remove(event.target.classList[1]);
  event.target.classList.add(currentColor.classList[1]);
}
for (const element of square){
element.addEventListener('click',clickColor);
}