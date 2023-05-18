import { Ishape } from "./ishape";

export class Line implements Ishape{
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
    x=0;
    y=0;
    points=[10,10,200,10];
    stroke='black';
    strokeWidth=4;
    rotation_angle=0;
    scaleX=1;
    scaleY=1;
    type='line';
    id=0;
}
