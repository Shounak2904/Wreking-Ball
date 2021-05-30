class Building{
    constructor(x,y,width,height){
        var option={
            friction:1,
        restitution:0,
        density:0.5
        }
        this.body=Bodies.rctangle(x,y,width,height,option)
        this.width=width
        this.height=height
        
    }

}