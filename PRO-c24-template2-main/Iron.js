class Iron{
	constructor(x,y)
	{var options={
		'restition':0.8,
		'friction':3,
		'density':30,
	}

		this.body=Bodies.rectangle(x, y, 50, 50, options)
		World.add(world, this.body);
        this.width=140;
        this.height=80;
	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			stroke("black");
			fill("brown");
			rect( 0, 0, this.width, this.height);
			pop()
	}

}