import { Ishape } from "./ishape";

export class Ellipse implements Ishape{
    x=0;
    y=0;
    stroke='black';
    radiusX=40;
    radiusY=20;
    strokeWidth=3;
    fill=''; 
    draggable=true;
    scaleX=1;
    scaleY=1;
    rotation_angle=0;
    type='ellipse';
    id=0;
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
