import { Ishape } from "./ishape";

export class Square implements Ishape {
    x=0;
    y=0;
    length=30;
    strokeWidth=2;
    scaleX=1;
    scaleY=1;
    rotation_angle=0;
    id=0;
    rotation=0;    
    stroke='black';
    type='square';
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
