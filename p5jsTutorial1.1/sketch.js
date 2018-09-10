function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(700,500);

}

function draw()
{
  //create a background using RGB values
  background(255,0,0)

  // change the paint brush to a specific color according to RGB values
  fill(0,0,255);

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(10,10,100,50);

}

function setup()
{
  createCanvas(700,500);

}
​
function draw()
{
	background(255,0,0)
​
	// change the paint brush to a specific color according to RGB values
	// this color applies only to the inside color of a shape
	fill(0,0,255);
​
	// change the paint brush to a specific color according to RGB values
	// this color applies only to the outside color of a shape
	stroke(0,0,0);
​
	// modifies the thickness of the border of an object
	strokeWeight(3);
​
​
	rect(10,10,100,50);
	rect(10,100,100,50);
​
​
	fill(255,255,0);
	stroke(255,255,255);
	strokeWeight(10);
​
	rect(150,10,100,50);
	rect(150,100,100,50);
​
}
