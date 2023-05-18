package com.example.paint.Shapes;

import java.util.Arrays;

public class Circle implements Shape {
    double radius,x,y,strokeWidth,scaleX,scaleY;
    int id;
    String fill,type,stroke;

    public Circle(double radius, double x, double y, double strokeWidth, double scaleX, double scaleY, int id, String fill, String type, String stroke) {
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.strokeWidth = strokeWidth;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.id = id;
        this.fill = fill;
        this.type = type;
        this.stroke = stroke;
    }

    public Circle() {
    }


    @Override
    public void draw() {
        System.out.println("its circle");}

    @Override
    public void settype(String s) {
        this.type=s;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
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

    public double getStrokeWidth() {
        return strokeWidth;
    }

    public void setStrokeWidth(double strokeWidth) {
        this.strokeWidth = strokeWidth;
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

    public int getId() {
        return id;
    }

    @Override
    public Shape clone() {
        return new Circle(this.radius,
        this.x,
        this.y,
        this.strokeWidth,
        this.scaleX,
        this.scaleY ,
        this.id ,
        this.fill,
        this.type,
        this.stroke);
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStroke() {
        return stroke;
    }

    public void setStroke(String stroke) {
        this.stroke = stroke;
    }
}
