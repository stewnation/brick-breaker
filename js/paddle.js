/**
 * Jaiveer Dhanju		100245432
 * Calvin Lui				100225224
 * Derek Yuan            100207884
 * CPSC 1045             Term Project
 *  
 * The paddle object of Brick Breaker
 **/

var paddle = {
	/***** Create Data Values *****/
	x: 			500,
	y: 			550,
	width: 		90,
	height:		20,
	color:		"blue",
	top:		   function(){return this.y;},
	bottom:		function(){return this.y + this.height;},
	left:		   function(){return this.x;},
	right: 		function(){return this.x + this.width;},
	
	
	/********** Mutators **********/
	setX: 		function(x) {this.x = x;},
	move: 		function(change) {this.x += change;},
	
	/********** Create Object on Canvas **********/
	draw: 		function(ctx) {	
					ctx.fillStyle = this.color;
					ctx.fillRect(this.x, this.y, this.width, this.height);
					ctx.strokeRect(this.x, this.y, this.width, this.height);
				   },

	/********** Collision Detection **********/
   collide:	   function(increaseNumber){
                  var rightCheck = this.x + this.width + increaseNumber;
                  var leftCheck = this.x + increaseNumber;
                  var ctx = document.querySelector("#theCanvas").getContext("2d");
                  
                  if(rightCheck >= ctx.canvas.width || leftCheck <= 0) {
                     return false;
                  } else {
                     return true;
                  }
               }
};
