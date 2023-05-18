import { ShapeFactory } from "../factory";
import { Ibuilder } from "./ibuilder";

export class Builder implements Ibuilder{
    factory = new ShapeFactory();
    RetrunedShape: any;
    build(shapename: string, shape: any) {
        this.RetrunedShape = this.factory.getshape(shapename);
        if (shapename == 'Rect') {
            this.RetrunedShape.x = shape.getX();
            this.RetrunedShape.y = shape.getY();
            this.RetrunedShape.width = shape.getWidth();
            this.RetrunedShape.height = shape.getHeight();
            this.RetrunedShape.strokeWidth = 2;
            this.RetrunedShape.scaleX = shape.getScaleX();
            this.RetrunedShape.scaleY = shape.getScaleY();
            this.RetrunedShape.id = shape.getId();
            this.RetrunedShape.stroke = shape.getStroke();
            this.RetrunedShape.rotation_angle= shape.getRotation();
            this.RetrunedShape.type = 'rectangle';
            this.RetrunedShape.fill = shape.getFill();
        }
        else if (shapename == "Circle") {
            this.RetrunedShape.x = shape.getX();
            this.RetrunedShape.y = shape.getY();
            this.RetrunedShape.radius = shape.getRadius();
            this.RetrunedShape.stroke = shape.getStroke();
            this.RetrunedShape.strokeWidth = 2;
            this.RetrunedShape.scaleX = shape.getScaleX();
            this.RetrunedShape.scaleY = shape.getScaleY();
            this.RetrunedShape.type = 'circle';
            this.RetrunedShape.id = shape.getId();
            this.RetrunedShape.fill = shape.getFill();

        }
        else if (shapename == "Ellipse") {
            this.RetrunedShape.x = shape.getX();
            this.RetrunedShape.y = shape.getY();
            this.RetrunedShape.stroke = shape.getStroke();
            this.RetrunedShape.radiusX = shape.getRadiusX();
            this.RetrunedShape.radiusY = shape.getRadiusY();
            this.RetrunedShape.strokeWidth = 3;
            this.RetrunedShape.fill = shape.getFill();
            this.RetrunedShape.scaleX = shape.getScaleX();
            this.RetrunedShape.scaleY = shape.getScaleY();
            this.RetrunedShape.rotation_angle= shape.getRotation();
            this.RetrunedShape.type = 'ellipse';
            this.RetrunedShape.id = shape.getId();
        }
        else if (shapename == "RegularPolygon") {
            this.RetrunedShape.x = shape.getX();
            this.RetrunedShape.y = shape.getY();
            this.RetrunedShape.sides = 3;
            this.RetrunedShape.radius = shape.getRadius();
            this.RetrunedShape.stroke = shape.getStroke();
            this.RetrunedShape.strokeWidth = 2;
            this.RetrunedShape.scaleX = shape.getScaleX();
            this.RetrunedShape.scaleY = shape.getScaleY();
            this.RetrunedShape.rotation_angle= shape.getRotation();
            this.RetrunedShape.type = 'triangle';
            this.RetrunedShape.id = shape.getId();
            this.RetrunedShape.fill = shape.getFill();

        }
        else if (shapename == "Line") {
            this.RetrunedShape.x = shape.getX();
            this.RetrunedShape.y = shape.getY();
            this.RetrunedShape.points = shape.getPoints();
            this.RetrunedShape.stroke = shape.getStroke();
            this.RetrunedShape.strokeWidth = 4;
            this.RetrunedShape.scaleX = shape.getScaleX();
            this.RetrunedShape.scaleY = shape.getScaleY();
            this.RetrunedShape.type = 'line';
            this.RetrunedShape.rotation_angle= shape.getRotation();
            this.RetrunedShape.id = shape.getId();
            
        }
        else if (shapename == "Square") {
            this.RetrunedShape.x = shape.getX();
            this.RetrunedShape.y = shape.getY();
            this.RetrunedShape.length = shape.getWidth();
            this.RetrunedShape.stroke = shape.getStroke();
            this.RetrunedShape.strokeWidth = 2;
            this.RetrunedShape.scaleX = shape.getScaleX();
            this.RetrunedShape.scaleY = shape.getScaleY();
            this.RetrunedShape.id = shape.getId();
            this.RetrunedShape.rotation = shape.getRotation();
            this.RetrunedShape.rotation_angle= shape.getRotation();
            this.RetrunedShape.type = 'square';
            this.RetrunedShape.fill = shape.getFill;
        }
        return this.RetrunedShape;
    }
    

}