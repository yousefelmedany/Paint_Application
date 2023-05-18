package com.example.paint.Factory;


import com.example.paint.Shapes.Shape;
import org.json.JSONObject;

public interface Ifactory {
    public Shape getshape(JSONObject jsonObj,String s);

}
