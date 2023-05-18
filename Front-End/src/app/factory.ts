import { Circle } from "./circle";
import { Ellipse } from "./ellipse";
import { Line } from "./line";
import { Rectangle } from "./rectangle";
import { Square } from "./square";
import { Triangle } from "./triangle";
export class ShapeFactory {
    getshape(shapename: string){
        if(shapename=="Rect"){
            return new Rectangle;
        }
        else if(shapename=="Circle"){
            return new Circle ;
        }
        else if(shapename=="Ellipse"){
            return new Ellipse;
        }
        else if(shapename=="RegularPolygon"){
            return new Triangle;
        }
        else if(shapename=="Line"){
            return new Line;
        }
        else if(shapename== "Square"){
            return new Square;
        }
        else return null;
    }
}