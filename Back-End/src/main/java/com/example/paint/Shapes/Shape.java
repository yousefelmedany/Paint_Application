package com.example.paint.Shapes;

public interface Shape extends Cloneable{
    public void draw();
    public void settype(String s);
    String getType();

    int getId();
    void setId(int id);
    double getX();
    void setX(double x);
    double getY();
    void setY(double y);
    Shape clone();
}
