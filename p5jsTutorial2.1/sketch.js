var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 10;
  button2Y = 150;


}

function draw()
{
	background(125,125,125)


	if (mouseX > 0 && mouseX < 0 + 100 && mouseY > 450 && mouseY < 450 + 50)
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(0,448,100,50);
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(0,448,100,50);
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(12);
	text("Brian",35,478);



  var button2X = 598
  var button2Y = 0
	fill(200,200,255);
	stroke(0,0,0);
	rect(button2X,button2Y,100,50);

	if (mouseX > button2X && mouseX < button2X + 100 && mouseY > button2Y && mouseY < button2Y+50)
	{
		fill(248,89,255);
		stroke(51,70,190);
		textSize(16);
		text("Wong",button2X+30-5,button2Y+30+2);
	}
	else
	{
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Wong",button2X+30,button2Y+30);
	}

}
