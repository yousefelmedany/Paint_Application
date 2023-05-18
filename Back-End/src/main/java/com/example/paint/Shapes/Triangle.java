package com.example.paint.Shapes;

import com.example.paint.Shapes.Shape;

public class Triangle implements Shape {
    double x,y,sides,radius,scaleX,scaleY,strokeWidth,rotation_angle;
    String stroke,type,fill;
    int id;

    public Triangle() {
    }

    public Triangle(double x, double y, double sides, double radius, double scaleX, double scaleY, double strokeWidth, double rotation_angle, String stroke, String type, String fill, int id) {
        this.x = x;
        this.y = y;
        this.sides = sides;
        this.radius = radius;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.strokeWidth = strokeWidth;
        this.rotation_angle = rotation_angle;
        this.stroke = stroke;
        this.type = type;
        this.fill = fill;
        this.id = id;
    }

    @Override
    public void draw() {
        System.out.println("its triangle number : "+id);
    }

    @Override
    public void settype(String s) {
        this.type=s;
    }


    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getSides() {
        return sides;
    }

    public void setSides(double sides) {
        this.sides = sides;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    public double getScaleX() {
        return scaleX;
    }

    public void setScaleX(double scaleX) {
        this.scaleX = scaleX;
    }

    public double getScaleY() {
        return scaleY;
    }

    public void setScaleY(double scaleY) {
        this.scaleY = scaleY;
    }

    public double getStrokeWidth() {
        return strokeWidth;
    }

    public void setStrokeWidth(double strokeWidth) {
        this.strokeWidth = strokeWidth;
    }

    public double getRotation_angle() {
        return rotation_angle;
    }

    public void setRotation_angle(double rotation_angle) {
        this.rotation_angle = rotation_angle;
    }

    public String getStroke() {
        return stroke;
    }

    public void setStroke(String stroke) {
        this.stroke = stroke;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getId() {
        return id;
    }

    @Override
    public Shape clone() {
        return new Triangle(this.x,
        this.y,
        this.sides,
        this.radius,
        this.scaleX,
        this.scaleY,
        this.strokeWidth,
        this.rotation_angle,
        this.stroke,
        this.type,
        this.fill,
        this.id);
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFill() {
        return fill;
    }

    public void setFill(String fill) {
        this.fill = fill;
    }
}
