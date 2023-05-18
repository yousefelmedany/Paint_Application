package com.example.paint.Factory;

import com.example.paint.Shapes.*;
import com.google.gson.Gson;
import org.json.JSONObject;

import java.util.Locale;

public class ShapeFactory implements Ifactory {

    Gson gson = new Gson();
    Shape shape=null;
    public Shape getshape(JSONObject jsonObj,String s)
    {
        if(s.toLowerCase().equals("circle"))
        {
            shape=gson.fromJson(jsonObj.toString(), Circle.class);
        }
        else if(s.toLowerCase().equals("rectangle"))
        {
            shape=gson.fromJson(jsonObj.toString(), Rectangle.class);
        }
        else if(s.toLowerCase().equals("triangle"))
        {
            shape=gson.fromJson(jsonObj.toString(), Triangle.class);
        }
        else if(s.toLowerCase().equals("square"))
        {
            shape=gson.fromJson(jsonObj.toString(), Square.class);
        }
        else if(s.toLowerCase().equals("ellipse"))
        {
            shape=gson.fromJson(jsonObj.toString(), Ellipse.class);
        }
        else if(s.toLowerCase().equals("line"))
        {
            shape=gson.fromJson(jsonObj.toString(), Line.class);
        }
        else return null;
        return shape;
    }

}
