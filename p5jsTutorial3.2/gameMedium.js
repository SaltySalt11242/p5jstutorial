var button2X;
var button2Y;

var mediumTitle;
var buttonBack;

function preloadgameMedium()
{
	mediumTitle = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-brian-wong-a/p5jsTutorial3.2/Images/title_medium-modenew.png');
	buttonBack = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-brian-wong-a/p5jsTutorial3.2/Images/button_back.png");
}

function setupgameMedium()
{
	button2X = 250;
	button2Y = 200;
}

function drawgameMedium()
{
	background (125,125,125);
	fill (50,50,50);

	image (mediumTitle,10,10);
	image (buttonBack,button2X,button2Y);

	if (mouseX > button2X && mouseX < button2X + 200 && mouseY > button2Y && mouseY < button2Y + 50 && mouseIsPressed)
	{
		canvasID = -1;
	}

}
