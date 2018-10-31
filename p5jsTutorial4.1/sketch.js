// declare bgm variable
var bgm;

function preload()
{
	// load sound file into variable bgm
	bgm = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-brian-wong-a/p5jsTutorial4.1/sounds/Undertale_Megalovania.mp3");

}

function setup()
{
	createCanvas(800,600);

	// play music during setup so that it doesn't loop infinitely
	bgm.play();
}

function draw()
{
	textSize(12);

	background(125,125,125)

	text("Credit for music goes to Benjamin TISSOT from www.bensound.com",10,40);


}
