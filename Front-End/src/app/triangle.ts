import { Ishape } from "./ishape";

export class Triangle implements Ishape{
    x=0;
    y=0;
    sides=3;
    radius=20;
    stroke='black';
    scaleX=1;
    scaleY=1;
    strokeWidth=2;
    rotation_angle=0;
    type='triangle';
    id=0;
    setId(id: number) {
        this.id = id;}
    settype(type:string){
       this.type = type;}
    setX(x:number) {
        this.x = x;}
    setY(y:number) {
       this.y=y;}
}
