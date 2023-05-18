package com.example.paint.Shapes;

public class Ellipse implements Shape {
    double x, y, strokeWidth, scaleX, scaleY, rotation_angle,radiusX,radiusY;
    int id;
    String fill, type, stroke;
    boolean draggable;

    public Ellipse() {
    }

    public Ellipse(double x, double y, double strokeWidth, double scaleX, double scaleY, double rotation_angle, double radiusX, double radiusY, int id, String fill, String type, String stroke, boolean draggable) {
        this.x = x;
        this.y = y;
        this.strokeWidth = strokeWidth;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.rotation_angle = rotation_angle;
        this.radiusX = radiusX;
        this.radiusY = radiusY;
        this.id = id;
        this.fill = fill;
        this.type = type;
        this.stroke = stroke;
        this.draggable = draggable;
    }

    @Override
    public void draw() {
        System.out.println("its rectangle number : "+id);
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

    public int getId() {
        return id;
    }

    @Override
    public Shape clone() {
        return new Ellipse(this.x,
        this.y,
        this.strokeWidth,
        this.scaleX,
        this.scaleY,
        this.rotation_angle,
        this.radiusX,
        this.radiusY ,
        this.id ,
        this.fill,
        this.type,
        this.stroke,
        this.draggable);
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

    public boolean isDraggable() {
        return draggable;
    }

    public void setDraggable(boolean draggable) {
        this.draggable = draggable;
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

    public double getRadiusX() {
        return radiusX;
    }

    public void setRadiusX(double radiusX) {
        this.radiusX = radiusX;
    }

    public double getRadiusY() {
        return radiusY;
    }

    public void setRadiusY(double radiusY) {
        this.radiusY = radiusY;
    }
}
