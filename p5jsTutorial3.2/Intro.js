var introTitle;

function preloadIntro()
{
	introTitle = loadImage ('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-brian-wong-a/p5jsTutorial3.2/Images/title_intro.png');
}

function setupIntro()
{
}

function drawIntro()
{

	background (125,125,125);
	image(introTitle,10,10);

	if (mouseIsPressed)
	{
		canvasID = -1;
	}
}
