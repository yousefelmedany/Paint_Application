package com.example.paint.Shapes;

public class Line implements Shape {
    double [] points;
    double x,y,strokeWidth,scaleX,scaleY,rotation_angle;
    String fill,type,stroke;
    int id;

    public Line() {
    }

    public Line(double[] points, double x, double y, double strokeWidth, double scaleX, double scaleY, double rotation_angle, String fill, String type, String stroke, int id) {
        this.points = points;
        this.x = x;
        this.y = y;
        this.strokeWidth = strokeWidth;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.rotation_angle = rotation_angle;
        this.fill = fill;
        this.type = type;
        this.stroke = stroke;
        this.id = id;
    }

    @Override
    public void draw() {
        System.out.println("its line number : "+id);
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
    public double getRotation_angle() {
        return rotation_angle;
    }
    public void setRotation_angle(double rotation_angle) {
        this.rotation_angle = rotation_angle;
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
    public int getId() {
        return id;
    }
    @Override
    public Shape clone() {
        return new Line(this.points,
        this.x,
        this.y ,
        this.strokeWidth ,
        this.scaleX ,
        this.scaleY,
        this.rotation_angle,
        this.fill,
        this.type ,
        this.stroke,
        this.id);
    }
    public void setId(int id) {
        this.id = id;
    }
    public double[] getPoints() {
        return points;
    }
    public void setPoints(double[] points) {
        this.points = points;
    }

}
