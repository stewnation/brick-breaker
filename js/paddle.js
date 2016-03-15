/**
 * Jaiveer Dhanju       100245432
 * Calvin Lui		100225224
 * Derek Yuan           100207884
 * CPSC 1045            Term Project
 *  
 * -insert Description here-
 **/

var paddle = {
	/***** Create Data Values *****/
	x: 		550,
	y: 		550,
	width: 		90,
	height:		20,
	color:		"blue",
	
	/********** Accessors **********/
	getX: 		function() {return this.x;},
	getY: 		function() {return this.y;},
	getHeight: 	function() {return this.height;},	
	getWidth: 	function() {return this.width;},
	
	/********** Mutators **********/
	setX: 		function(x) {this.x = x;},
	move: 		function(change) {this.x += change;},
	
	/********** Create Object on Canvas **********/
	draw: 		function(ctx) {
				ctx.fillStyle = this.color;
				ctx.fillRect(this.getX()-(this.getWidth()/2), this.getY()-(this.getHeight()/2), this.width, this.height);
				ctx.strokeRect(this.getX()-(this.getWidth()/2), this.getY()-(this.getHeight()/2), this.width, this.height);
			},
				
	
};
