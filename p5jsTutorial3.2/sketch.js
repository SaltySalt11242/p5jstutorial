/*
	canvasID = 0 - Intro
	canvasID = 1 - MainMenu
	canvasID = 2 - gameEasy
	canvasID = 3 - gameMedium
	canvasID = 4 - gameHard
*/

var canvasID;

function preload()
{
	preloadIntro();
	preloadMainMenu();
	preloadgameEasy();
	preloadgameMedium();
	preloadgameHard();
}

function setup()
{
	createCanvas (700,500);

	setupIntro();
	setupMainMenu();
	setupgameEasy();
	setupgameMedium();
	setupgameHard();

	canvasID = 0;
}

function draw()
{

	background(125,125,125)

	if (canvasID == 0)
	{
		drawIntro();
	}
	if (canvasID == 1)
	{
		drawMainMenu();
	}
	if (canvasID == 2)
	{
		drawgameEasy();
	}
	if (canvasID == 3)
	{
		drawgameMedium();
	}
	if (canvasID == 4)
	{
		drawgameHard();
	}
}
function mouseReleased()
{
	if (canvasID == -1)
	{
		canvasID = 1;
	}
	if (canvasID == -2)
	{
		canvasID = 2;
	}
	if (canvasID == -3)
	{
		canvasID = 3;
	}
	if (canvasID == -4)
	{
		canvasID = 4;
	}
}
