function Cell(x,y,w){
    this.x = x;
    this.y= y;
    this.w = w;
    this.num =0;

    if (random(1)<0.2){
        this.bee =true;
    }
    else{
        this.bee = false;
    }

    this.revealed = 0;
    this.flag = 0;

}

Cell.prototype.show = function(){
    stroke(0);
    noFill();
    rect(this.x,this.y,this.w);
    if(this.revealed == 1){
        if(this.flag){
            rect(this.x,this.y,5,5);
        }
        else if(this.bee){
            ellipse(this.x + this.w*0.5,this.y+this.w*0.5,this.w*0.5,this.w*0.5);
            text("Your Dead!",500,500);
            
        }
        
        else{
            text(this.num,this.x +this.w*0.3,this.y + this.w*0.7);
        }

        
    }
}

Cell.prototype.contains = function(x,y){
    return (x>this.x  && x< this.x + this.w && y>this.y  && y< this.y + this.w);
}

Cell.prototype.reveal = function (){
    this.revealed = 1;
}