var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 200;
  button2Y = 100;


}

function draw()
{
	background(125,125,125)


	// Example 1: easy to understand - Start

	if (mouseX > 200 && mouseX < 200 + 100 && mouseY > 10 && mouseY < 10+50)
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(200,10,100,50);
    text ("Shanghai",215,40);
		if (mouseIsPressed == true)
		{
			fill(47,247,114);
			stroke(0,0,0);
			strokeWeight(3);
			rect(200,10,100,50);
      text ("Academy",215,40);
		}
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(200,10,100,50);
    text("Victoria",215,40);
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(5);

	// Example 1: easy to understand - End




	// Example 2: less code but harder to understand - Start

	strokeWeight(3);

	if (mouseX > button2X && mouseX < button2X + 100 && mouseY > button2Y && mouseY < button2Y+50)
	{
		fill(0,255,0);
    rect(button2X,button2Y,100,50);
		textSize(16);
		fill(255,255,255);
		stroke(0,0,0);
		text("Amazon",button2X+30-5,button2Y+30+2);
		if (mouseIsPressed == true)
		{
      fill(255,0,0);
      rect(button2X,button2Y,100,50);
      fill(255,255,255);
      text("Nile",button2X+30, button2Y+30);
		}

	}
	else
	{
		fill(127,0,255);
		rect(button2X,button2Y,100,50);
		textSize(12);
		fill(255,255,255);
		stroke(0,0,0);
		text("Danube",button2X+30,button2Y+30);
	}


	// Example 2: less code but harder to understand - End


}
