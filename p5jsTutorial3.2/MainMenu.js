var button2X;
var button2Y;

var mainMenuTitle;
var buttonEasy;
var buttonMedium;
var buttonHard;

function preloadMainMenu()
{
	mainMenuTitle = loadImage ('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-brian-wong-a/p5jsTutorial3.2/Images/title_main-menunew.png');
	buttonEasy = loadImage ('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-brian-wong-a/p5jsTutorial3.2/Images/button_easy-mode.png');
	buttonMedium = loadImage ('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-brian-wong-a/p5jsTutorial3.2/Images/button_medium-mode.png');
	buttonHard = loadImage ('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-brian-wong-a/p5jsTutorial3.2/Images/button_hard-mode.png');
}

function setupMainMenu()
{
	button2X = 250;
	button2Y = 200;
}

function drawMainMenu()
{
	background (125,125,125);

	image(buttonEasy,button2X,button2Y - 100);
	image(buttonMedium,button2X,button2Y);
	image(buttonHard,button2X,button2Y + 100);
	image(mainMenuTitle,10,10);

	if (mouseX > button2X && mouseX < button2X + 200 && mouseY > button2Y - 100 && mouseY < button2Y - 50 && mouseIsPressed)
	{
		canvasID = -2;
	}

	if (mouseX > button2X && mouseX < button2X + 200 && mouseY > button2Y && mouseY < button2Y + 50 && mouseIsPressed)
	{
		canvasID = -3;
	}

	if (mouseX > button2X && mouseX < button2X + 200 && mouseY > button2Y + 100 && mouseY < button2Y + 150 && mouseIsPressed)
	{
		canvasID = -4;
	}
}
