var platforms;
var maxPlatforms;
var playerX;
var playerY;
var jump;
var jumpCounter;
var falling;
var maxHeight;


/*
the 0 array location is the x coordinate of the platform

the 1st array location is the y coordinate of the platform

the 2nd array location is the length coordinate of the platform

the 3rd array location is the height coordinate of the platform

the 4th array location determines where the player can hit the platform
platforms[c][4] = 0; - top
platforms[c][4] = 1; - top+bottom
platforms[c][4] = 4; - all walls


the 5th array location determines which box is the correct one
platforms[c][5] = 0; - incorrect question
platforms[c][5] = 1; - correct question


the 6th array location is whether the platform exists or not
0 - does NOT exist
1 - does exist


the 7th array location determines which question this belongs with
0 - question 1
1 - question 2

*/



function preloadPythagoras()
{

}

function setupPythagoras()
{
	// setup the platforms
	// --------------------------------------
	maxPlatforms = 28;
	platforms = new Array(maxPlatforms);
	for (var r = 0; r < maxPlatforms; r++)
	{
		platforms[r] = new Array(8);
	}

	for (var c = 0; c < maxPlatforms; c++)
	{
		for (var r = 0; r < 8; r++)
		{
			platforms[c][r] = 0;
		}
	}


	// ------------------------------------- QUESTION 0 --------------------------------------------
	// 0 - 6
	// big platform on the bottom
	platforms[0][0] = 1;
	platforms[0][1] = 500;
	platforms[0][2] = 800;
	platforms[0][3] = 50;
	platforms[0][4] = 4;
	platforms[0][6] = 1;
	platforms[0][7] = 0;

	// update your horizontal platforms
	platforms[1][0] = 1;
	platforms[1][1] = 100;
	platforms[1][2] = 50;
	platforms[1][3] = 400;
	platforms[1][4] = 4;
	platforms[1][6] = 1;
	platforms[1][7] = 0;


	platforms[2][0] = 750;
	platforms[2][1] = 100;
	platforms[2][2] = 50;
	platforms[2][3] = 400;
	platforms[2][4] = 4;
	platforms[2][6] = 1;
	platforms[2][7] = 0;

	// initialize all platforms with x and y coordinates
	// starting with 1 because 0 is alreaddy the bottom platform
	for (var c = 3, x = 0; c <= 6; c++, x++)
	{
		// x coordinates
		platforms[c][0] = x*100+150;
		// y coordinates
		platforms[c][1] = 400;
		// length
		platforms[c][2] = 75;
		// height
		platforms[c][3] = 70;
		// hit location
		platforms[c][4] = 4;
		// correct/incorrect
		platforms[c][5] = 0;
		// exist or not
		platforms[c][6] = 1;
		// question
		platforms[c][7] = 0;

	}
	// correct answers
	platforms[3][5] = 1;

	// ------------------------------------- QUESTION 0 --------------------------------------------




	// ------------------------------------- QUESTION 1 --------------------------------------------
	// 7 - 13
	// big platform on the bottom
	platforms[7][0] = 1;
	platforms[7][1] = 500;
	platforms[7][2] = 800;
	platforms[7][3] = 50;
	platforms[7][4] = 0;
	platforms[7][6] = 1;
	platforms[7][7] = 1;

	// update your horizontal platforms
	platforms[8][0] = 1;
	platforms[8][1] = 100;
	platforms[8][2] = 50;
	platforms[8][3] = 400;
	platforms[8][4] = 4;
	platforms[8][6] = 1;
	platforms[8][7] = 1;


	platforms[9][0] = 750;
	platforms[9][1] = 100;
	platforms[9][2] = 50;
	platforms[9][3] = 400;
	platforms[9][4] = 4;
	platforms[9][6] = 1;
	platforms[9][7] = 1;


	// initialize all platforms with x and y coordinates
	// starting with 1 because 0 is alreaddy the bottom platform
	for (var c = 10, x = 0; c <= 13; c++, x++)
	{
		// x coordinates
		platforms[c][0] = x*100+150;
		// y coordinates
		platforms[c][1] = 400;
		// length
		platforms[c][2] = 75;
		// height
		platforms[c][3] = 70;
		// hit location
		platforms[c][4] = 4;
		// correct/incorrect
		platforms[c][5] = 0;
		// exist or not
		platforms[c][6] = 1;
		// question
		platforms[c][7] = 1;

	}
	// correct answers
	platforms[11][5] = 1;
	// ------------------------------------- QUESTION 1 --------------------------------------------




	// ------------------------------------- QUESTION 2 --------------------------------------------
	// 14 - 20
	// big platform on the bottom
	platforms[14][0] = 1;
	platforms[14][1] = 500;
	platforms[14][2] = 800;
	platforms[14][3] = 50;
	platforms[14][4] = 0;
	platforms[14][6] = 1;
	platforms[14][7] = 2;

	// update your horizontal platforms
	platforms[15][0] = 1;
	platforms[15][1] = 100;
	platforms[15][2] = 50;
	platforms[15][3] = 400;
	platforms[15][4] = 4;
	platforms[15][6] = 1;
	platforms[15][7] = 2;


	platforms[16][0] = 750;
	platforms[16][1] = 100;
	platforms[16][2] = 50;
	platforms[16][3] = 400;
	platforms[16][4] = 4;
	platforms[16][6] = 1;
	platforms[16][7] = 2;


	// initialize all platforms with x and y coordinates
	// starting with 1 because 0 is already the bottom platform
	for (var c = 17, x = 0; c <= 20; c++, x++)
	{
		// x coordinates
		platforms[c][0] = x*100+150;
		// y coordinates
		platforms[c][1] = 400;
		// length
		platforms[c][2] = 75;
		// height
		platforms[c][3] = 70;
		// hit location
		platforms[c][4] = 4;
		// correct/incorrect
		platforms[c][5] = 0;
		// exist or not
		platforms[c][6] = 1;
		// question
		platforms[c][7] = 2;

	}
	// correct answers
	platforms[17][5] = 1;
	// ------------------------------------- QUESTION 2 --------------------------------------------




	// ------------------------------------- QUESTION 3 --------------------------------------------
	// 21 - 27
	// big platform on the bottom
	platforms[21][0] = 1;
	platforms[21][1] = 500;
	platforms[21][2] = 800;
	platforms[21][3] = 50;
	platforms[21][4] = 0;
	platforms[21][6] = 1;
	platforms[21][7] = 3;

	// update your horizontal platforms
	platforms[22][0] = 1;
	platforms[22][1] = 100;
	platforms[22][2] = 50;
	platforms[22][3] = 400;
	platforms[22][4] = 4;
	platforms[22][6] = 1;
	platforms[22][7] = 3;


	platforms[23][0] = 750;
	platforms[23][1] = 100;
	platforms[23][2] = 50;
	platforms[23][3] = 400;
	platforms[23][4] = 4;
	platforms[23][6] = 1;
	platforms[23][7] = 3;


	// initialize all platforms with x and y coordinates
	// starting with 1 because 0 is alreaddy the bottom platform
	for (var c = 24, x = 0; c <= 27; c++, x++)
	{
		// x coordinates
		platforms[c][0] = x*100+150;
		// y coordinates
		platforms[c][1] = 400;
		// length
		platforms[c][2] = 75;
		// height
		platforms[c][3] = 70;
		// hit location
		platforms[c][4] = 4;
		// correct/incorrect
		platforms[c][5] = 0;
		// exist or not
		platforms[c][6] = 1;
		// question
		platforms[c][7] = 3;

	}
	// correct answers
	platforms[27][5] = 1;
	// ------------------------------------- QUESTION 3 --------------------------------------------




	// --------------------------------------

}

function showPythagoras(questionID)
{

	// show platform values
	for (var r = 0; r < maxPlatforms; r++)
	{

		for (var c = 0; c < maxPlatforms; c++)
		{
			text("x: "+platforms[c][0],50+r*100,50*c*50);
			text("y: "+platforms[c][1],100+r*100,50*c*50);
			text("length: "+platforms[c][1],150+r*100,50*c*50);
			text("height: "+platforms[c][1],200+r*100,50*c*50);

		}
	}


	// move platforms
	for (var c = 0; c < maxPlatforms; c++)
	{
		if (platforms[c][6] == 1 && platforms[c][7] == questionID)
		{
		if (platforms[c][5] == 1)
			{
				fill(0,200,0);
			}
		else
			{
				fill(125,125,125);
			}
			rect(platforms[c][0],platforms[c][1],platforms[c][2],platforms[c][3]);

		}
	// ------------------------------------- QUESTION 0 --------------------------------------------
		fill(255,255,255);
		if (platforms[3][6] == 1 && platforms[3][7] == questionID)
		{
			text("A",185,440);
		}
		if (platforms[4][6] == 1 && platforms[4][7] == questionID)
		{
			text("B",285,440);
		}
		if (platforms[5][6] == 1 && platforms[5][7] == questionID)
		{
			text("C",385,440);
		}
		if (platforms[6][6] == 1 && platforms[6][7] == questionID)
		{
			text("D",485,440);
		}
	// ------------------------------------- QUESTION 0 --------------------------------------------


	// ------------------------------------- QUESTION 1 --------------------------------------------
		if (platforms[10][6] == 1 && platforms[10][7] == questionID)
		{
			text("A",185,440);
		}
		if (platforms[11][6] == 1 && platforms[11][7] == questionID)
		{
			text("B",285,440);
		}
		if (platforms[12][6] == 1 && platforms[12][7] == questionID)
		{
			text("C",385,440);
		}
		if (platforms[13][6] == 1 && platforms[13][7] == questionID)
		{
			text("D",485,440);
		}
	// ------------------------------------- QUESTION 1 --------------------------------------------


	// ------------------------------------- QUESTION 2 --------------------------------------------
		if (platforms[17][6] == 1 && platforms[17][7] == questionID)
		{
			text("A",185,440);
		}
		if (platforms[18][6] == 1 && platforms[18][7] == questionID)
		{
			text("B",285,440);
		}
		if (platforms[19][6] == 1 && platforms[19][7] == questionID)
		{
			text("C",385,440);
		}
		if (platforms[20][6] == 1 && platforms[20][7] == questionID)
		{
			text("D",485,440);
		}
	// ------------------------------------- QUESTION 2 --------------------------------------------


	// ------------------------------------- QUESTION 3 --------------------------------------------
		if (platforms[24][6] == 1 && platforms[24][7] == questionID)
		{
			text("A",185,440);
		}
		if (platforms[25][6] == 1 && platforms[25][7] == questionID)
		{
			text("B",285,440);
		}
		if (platforms[26][6] == 1 && platforms[26][7] == questionID)
		{
			text("C",385,440);
		}
		if (platforms[27][6] == 1 && platforms[27][7] == questionID)
		{
			text("D",485,440);
		}
	// ------------------------------------- QUESTION 3 --------------------------------------------

	}




}

function drawWorld(questionID)
{
	console.log(canvasID);
	showPythagoras(questionID);

	drawPlayer();

	manageJumpAndFall(questionID);
	manageWalkIntoWall(questionID);
	manageMoveLR();



	initiateNextQuestion();

}
