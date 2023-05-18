package com.example.paint.Shapes;

public class Rectangle implements Shape {
    double x;
    double y;
    double width;
    double height;

    public Rectangle() {
    }

    double strokeWidth;
    double scaleX;
    double scaleY;
    int id;
    double rotation_angle;
    String stroke,type,fill;

    public Rectangle(double x, double y, double width, double height, double strokeWidth, double scaleX, double scaleY, int id, double rotation_angle, String stroke, String type, String fill) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.strokeWidth = strokeWidth;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.id = id;
        this.rotation_angle = rotation_angle;
        this.stroke = stroke;
        this.type = type;
        this.fill = fill;
    }

    @Override
    public void draw() {
        System.out.println("its rectangle");
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

    public double getWidth() {
        return width;
    }

    public void setWidth(double width) {
        this.width = width;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
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
        return new Rectangle(this.x ,
        this.y ,
        this.width ,
        this.height ,
        this.strokeWidth,
        this.scaleX ,
        this.scaleY ,
        this.id,
        this.rotation_angle,
        this.stroke ,
        this.type ,
        this.fill);
    }

    public void setId(int id) {
        this.id = id;
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

    public String getFill() {
        return fill;
    }

    public void setFill(String fill) {
        this.fill = fill;
    }
}
