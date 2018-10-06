function Bullet(x,y){
	this.x = x;
	this.y = y;
	this.show =  function (){
		fill(255,0, 26);
		ellipse(this.x, this.y+570, 20, 20);
		
	}
}
function Ship(){
this.x = 600/2;
this.y = 0;

this.show = function (){
	fill(255);
	rect(this.x, height-20, 20, 20);
}

this.move = function (dir){
	this.x = this.x + dir;
	
}

this.shoot = function(){
	var bullet = new Bullet(this.x+10, this.y);
	bullet.show();
}
}

