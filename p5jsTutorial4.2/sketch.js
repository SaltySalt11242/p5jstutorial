var bgm;

// declare sfx1 variable
var sfx1;

var buttonAttack;

function preload()
{
	bgm = loadSound("https://saltysalt11242.github.io/p5jstutorial/p5jsTutorial4.2/sounds/Undertale_Megalovania.mp3");

	// load sound file into variable sfx1
	sfx1 = loadSound("https://saltysalt11242.github.io/p5jstutorial/p5jsTutorial4.2/sounds/Undertale_Sound_Effect_Attack_Hit.mp3");

	buttonAttack = loadImage("https://saltysalt11242.github.io/p5jstutorial/p5jsTutorial4.2/images/button_attack.png");

}

function setup()
{
	createCanvas(800,600);

	bgm.play();
}

function draw()
{
	textSize(12);

	background(125,125,125)

	text("Credit for bgm goes to Benjamin Toby Fox",10,40);
	text("Credit for sound effect goes to Toby Fox",10,80);


	image(buttonAttack,200,100);

	// Check if we have clicked on the button
	if (mouseX > 200 && mouseX < 200 + 168 && mouseY > 100 && mouseY < 100 + 40 && mouseIsPressed)
	{
		// check that the sound effect is NOT (!) already playing; it is usually not desired to have the sound effect overlap
		if (!sfx1.isPlaying())
		{
			// play the sound effect
			sfx1.play();
		}
	}



}
