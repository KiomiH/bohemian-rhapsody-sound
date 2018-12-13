var song;
var Counter = 0;
var pausebutton;
var playbutton;

function preload(){
	song= loadSound("Queen_-_Bohemian_Rhapsody_Official_Video_hight.mp3");
}

function setup() {
  createCanvas(1400, 670);
  background(255,90,160);
	rectMode(CENTER);
	
	song.loop();  
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
	angleMode(DEGREES);
	
	pausebutton = createButton("pause");
	pausebutton.position(130,60)
	pausebutton.size(50,35)
	pausebutton.mousePressed(pausesong);
	
	playbutton = createButton("play");
	playbutton.position(130,20)
	playbutton.size(50,35)
	playbutton.mousePressed(playsong);
}

function draw() {
  background(255,90,160);

  var rms = analyzer.getLevel();
//	print(rms) //
	var NormRms = rms/.2 

	//first
	fill(255*NormRms,255-128*NormRms, 255-235*NormRms);
	rect(200, 300, 130+rms*800, 180-rms*1000);
  stroke(0);

	fill(210,180,40);
  ellipse(200, 330, 50-rms*800, 40+rms*500);
	
	//second
	fill(255+230*NormRms,200+50*NormRms,20+60*NormRms);
	triangle(400+150*NormRms,370,500,210+150*NormRms,600-150*NormRms,370)
	
	fill(100,128,30);
	ellipse(500,330,40+rms*500,50-rms*800);

	//third
	fill(210-100*NormRms,100+200*NormRms,210-100*NormRms);
	ellipse(800,300,170-rms*800,170-rms*800);
	
	fill(255,150,150);
	rect(800,330,50+rms*800, 40-rms*1000);

	//fourth
	fill(110+100*NormRms,255-100*NormRms,200-50*NormRms);
	rect(1100,300,180+rms*1000,130-rms*800);
	
	fill(210,100,210);
	triangle(1070+50*NormRms,340,1100,300-50*NormRms,1130-50*NormRms,340);
}

function pausesong(){
	pausebutton.mousePressed = song.pause();
	}
function playsong(){
	playbutton.mousePressed = song.play();
}
