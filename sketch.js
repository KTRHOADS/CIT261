var ship = new Ship();
function setup(){
createCanvas(600, 600);

}

function draw(){
background(51);
ship.show();
ship.move(-1);
if ((ship.x)/2 == 0){
	ship.x = 600;
	}

}

function keyPressed(){
		if(keyCode === Up){
	ship.shoot();
}
	}
