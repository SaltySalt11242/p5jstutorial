var Cat;
var Scream;
var ButterCat;
var PotatoCat;
var Neko;
var Screaming;
var button2X;
var button2Y;

function preload()
{
	Neko = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-brian-wong-a/p5jsTutorial3.1/Neko.jpg');
	Screaming = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-brian-wong-a/p5jsTutorial3.1/Screaming.jpg');
	PotatoCat = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-brian-wong-a/p5jsTutorial3.1/PotatoButterCat.jpg');

	Cat = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-brian-wong-a/p5jsTutorial3.1/button_neko2.png');
	Scream = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-brian-wong-a/p5jsTutorial3.1/button_screaming-cat2.png');
	ButterCat = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-brian-wong-a/p5jsTutorial3.1/button_potato-butter-cat2.png');
}

function setup()
{
	createCanvas(800,600);

	button2X = 1;
	button2Y = 1;

}

function draw()
{
	background(125,125,125)


	// Example 1: easy to understand - Start


	// Example 1: easy to understand - End




	// Example 2: less code but harder to understand - Start

	strokeWeight(3);



	if (mouseX > button2X && mouseX < button2X + 200 && mouseY > button2Y && mouseY < button2Y+50)
	{
		image(Scream,button2X,button2Y);
		image(Screaming,10,150,326/2,326/2);

		if (mouseIsPressed)
		{
			image(ButterCat,button2X,button2Y);
			image(PotatoCat,10,150,540/2,532/2);
		}
	}
	else
	{
		image(Cat,button2X,button2Y);
		image(Neko,10,150,525/2,350/2);
	}


	// Example 2: less code but harder to understand - End


}
