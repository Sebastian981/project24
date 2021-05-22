class Stone{
	constructor(x,y)
	{var options={
		'restition':0.8,
		'friction':0.9,
		'density':12,
	}

		this.body=Bodies.rectangle(x,y, 50, 50, options)
		World.add(world, this.body);
        this.width=140;
        this.height=80;
	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			stroke("black");
			fill("black");
			rect(0,0,this.width,this.height)
			pop()
	}

}