var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
init();

function init(){
	// mode button eventListeners
	for(var i = 0; i < modeButtons.length; i++){
	 	modeButtons[i].addEventListener("click", function(){
		 	modeButtons[0].classList.remove("selected");
		 	modeButtons[1].classList.remove("selected");
		 	this.classList.add("selected");
		 	this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
		 	// figure out how many squares to show
		 	// pick new colors
		 	// pick new picked color
		 	// update page to reflect changes
		 	reset();
	 	});
	}
	for(var i = 0; i < squares.length; i++){
		// add initial colors to squares
		// add click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?"
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent  = "Try Again";}

		});
	}
	reset();


}


function reset(){
	// generate new colors
	colors = generateRandomColors(numOfSquares);
	// pick a new random colors
	pickedColor = pickColor();
	// change colorDisplay
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		
	}
	// reset h1 color to #232323
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Color";
}


resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	// loop through all squares
	for(var i = 0; i < squares.length; i++){
			// change ALL to pickedColor
			squares[i].style.backgroundColor = color;	
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//make an array 
	var colorArray = [];
	//add num ammount of colors to array
	for(var i = 0; i < num; i++){
		// get random color then push into array
		colorArray.push(randomColor());
	}
	//return array
	return colorArray;
}

function randomColor(){
	// pick a red from (0 - 255)
	var r = Math.floor(Math.random() * 256);
	// pick a green from (0 - 255)
	var g = Math.floor(Math.random() * 256);
	// pick a blue from (0 - 255)
	var b = Math.floor(Math.random() * 256);
    // rgb(r, g, b)
	return  "rgb("+ r +", " +g +", "+ b+ ")";
}