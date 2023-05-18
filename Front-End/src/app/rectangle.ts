import { Ishape } from "./ishape";

export class Rectangle implements Ishape{
    
    x=0;
    y=0;
    width=100;
    height=50;
    strokeWidth=2;
    scaleX=1;
    scaleY=1;
    id=0;
    rotation_angle=0;
    stroke='black';
    type='rectangle';
    fill='';
    setId(id: number) {
        this.id = id;}
    settype(type:string){
       this.type = type;
    }
    setX(x:number) {
        this.x = x;
    }
    setY(y:number) {
       this.y=y;
    }

}
