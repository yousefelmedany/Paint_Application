import { Ishape } from "./ishape";

export class Circle implements Ishape {
    x=0;
    y=0;
    radius=30;
    stroke='black';
    strokeWidth=2;
    scaleX=1;
    scaleY=1;
    type='circle';
    id=0;
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