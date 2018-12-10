var canvasID;

function preload()
{
	preloadTrigonometry();
	preloadPythagoras();
}

function setup()
{
	createCanvas(800,600);
	setupTrigonometry();
	setupPythagoras();
	setupPlayer();

	canvasID = 1;

}

function draw()
{
	if (canvasID == 1)
	{
		drawPythagoras();
	}
	if (canvasID == 2)
	{
		background(0,0,0);
		showControls();
		drawWorld(0);
	}
	if (canvasID == 3)
	{
		background(0,0,0);
		showControls();
		drawWorld(1);
	}
	if (canvasID == 4)
	{
		background(0,0,0);
		showControls();
		drawWorld(2);
	}
	if (canvasID == 5)
	{
		background(0,0,0);
		showControls();
		drawWorld(3);
	}
}
