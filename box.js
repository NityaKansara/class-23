class Box {

    //PROPERTIES
    constructor(x, y, w, h){

        var options = {restitution: 1};
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    //FUNCTIONS
    display(){
        fill(255);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}

/*
x
sprite.x = 200;

this - keyword used for the currently active object using the property
*/