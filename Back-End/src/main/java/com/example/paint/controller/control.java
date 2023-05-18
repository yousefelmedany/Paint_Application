package com.example.paint.controller;


import com.example.paint.Factory.Ifactory;
import com.example.paint.Factory.ShapeFactory;
import com.example.paint.Shapes.Shape;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import java.beans.XMLEncoder;
import java.beans.XMLDecoder;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

@CrossOrigin()
@RestController
@RequestMapping("/paint")
public class control{


    private Stack<Integer> undo = new Stack<>();
    private Stack<Integer> redo = new Stack<>();
    Stack<Shape> s=new Stack<>();
    private Map<Integer,Object>cur=new HashMap<>();
    private Stack<Map<Integer,Object>> u_object=new Stack<>();
    private Stack<Map<Integer,Object>> r_object=new Stack<>();
    private Ifactory factory=new ShapeFactory();
    @RequestMapping( value = "/add/{type}/{id}",method = RequestMethod.POST)
    @ResponseBody
    public Result addshape(@RequestBody String  inputData , @PathVariable String type, @PathVariable int id){
        JSONObject jsonObj = new JSONObject(inputData);
        Shape shape =factory.getshape(jsonObj,type);
        shape.settype(type);
        shape.setId(id);
        undo.push(id);
        cur.put(id,shape);
        Map<Integer,Object>new_state=new HashMap<>();
        new_state.putAll(cur);
        u_object.push(new_state);
        r_object.clear();
        redo.clear();
        return new Result("Shape "+type+" with id : "+id+"created successfully",true);
    }
    @RequestMapping( value = "/modify/{type}/{id}",method = RequestMethod.POST)
    @ResponseBody
    public Result modifysape(@RequestBody String  inputData , @PathVariable String type, @PathVariable int id){
        org.json.JSONObject jsonObj = new JSONObject(inputData);
        Shape shape =factory.getshape(jsonObj,type);
        shape.settype(type);
        undo.push(id);
        Map<Integer,Object>mod= new HashMap<>();
        mod.putAll(u_object.peek());
        Object old=mod.get(id);
        cur.replace(id,old,shape);
        mod.replace(id,old,shape);
        u_object.push(mod);
        r_object.clear();
        redo.clear();
        return new Result("Shape "+type+" with id : "+id+"modified successfully",true);
    }
    @RequestMapping( value = "/delete/{id}",method = RequestMethod.POST)
    @ResponseBody
    public Stack<Map<Integer,Object>> delete(@PathVariable int id) throws NullPointerException,JSONException{
        if(undo.empty())
            return null;
        Map<Integer,Object> map=new HashMap<>();
        cur.remove(id);
        map.putAll(cur);
        u_object.push(map);
        undo.push(id);
        r_object.clear();
        redo.clear();
        return u_object;
    }

    @RequestMapping( value = "/undo",method = RequestMethod.POST)
    @ResponseBody
    public Stack<Map<Integer,Object>> undo() throws NullPointerException,JSONException{
        if(u_object.empty()||undo.empty()) return null;
        cur.clear();
        Map<Integer, Object> map = new HashMap<>();
        map.putAll(u_object.pop());
        if(!u_object.empty())cur.putAll(u_object.peek());
        else cur.clear();
        r_object.push(map);
        int i=undo.pop();
        redo.push(i);
        return u_object;
    }
    @RequestMapping( value = "/redo",method = RequestMethod.POST)
    @ResponseBody
    public Stack<Map<Integer,Object>> redo()throws NullPointerException,JSONException{
        if(redo.empty()||r_object.empty())
            return null;
        Object obj;
        obj=r_object.peek().get(redo.peek());
        cur.put(redo.peek(),r_object.peek().get(redo.peek()));
        Map<Integer, Object> map = new HashMap<>();
        map.putAll(r_object.pop());
        u_object.push(map);
        int i=redo.pop();
        undo.push(i);
        return u_object ;
    }
    @RequestMapping( value = "/save/{t}",method = RequestMethod.POST)
    @ResponseBody
    public Result save(@RequestBody String path ,@PathVariable boolean t)throws NullPointerException,JSONException{

        if(t){
            try{
                FileOutputStream file=new FileOutputStream(new File(path));
                XMLEncoder encoder=new XMLEncoder(file);
                for (Map.Entry<Integer,Object> entry : u_object.peek().entrySet()) {
                    encoder.writeObject(entry.getValue());
                }
                encoder.close();
                file.close();
            }
            catch (IOException ex)
            {ex.printStackTrace();}
        }
        else {
        JSONObject jsonObject = new JSONObject(u_object.peek());
        try {
            FileWriter file = new FileWriter(path);
            file.write(jsonObject.toString());
            file.close();
        } catch (IOException e) {
            e.printStackTrace();}
        }
        return new Result("Saved correctly",true);
    }



    @RequestMapping( value = "/load/{t}",method = RequestMethod.POST)
    @ResponseBody
    public Map<Integer,Object> load(@RequestBody String path, @PathVariable boolean t)throws NullPointerException, JSONException,
            ParserConfigurationException, IOException, SAXException,ArrayIndexOutOfBoundsException{

        Map<Integer,Object> mp=new HashMap<>();
        if(t){
            try {
                FileInputStream f1 = new FileInputStream(path);
                DocumentBuilderFactory fact=DocumentBuilderFactory.newInstance();
                DocumentBuilder build= fact.newDocumentBuilder();
                Document doc= build.parse(f1);
                NodeList nlist=doc.getElementsByTagName("int");
                int size=nlist.getLength();
                FileInputStream f2 = new FileInputStream(path);
                XMLDecoder mydecoder = new XMLDecoder(f2);
                while(size!=0) {
                    Shape result = (Shape) mydecoder.readObject();
                    mp.put(result.getId(),result);
                    result.draw();
                    size--;}
                Map<Integer,Object>new_map=new HashMap<>();
                cur.putAll(mp);
                new_map.putAll(cur);
                u_object.push(new_map);
                mydecoder.close();
                f2.close();}
            catch (ArrayIndexOutOfBoundsException e) {
            e.printStackTrace();
        }}
        else{
        ObjectMapper mapper = new ObjectMapper();
        try {
            File fileObj = new File(path);
            if(fileObj==null) return null;
            mp = mapper.readValue(
                    fileObj, new TypeReference<Map<Integer,Object>>() {
                    });
            Map<Integer,Object>new_map=new HashMap<>();
            cur.putAll(mp);
            new_map.putAll(cur);
            u_object.push(new_map);

        } catch (Exception e) {
            e.printStackTrace();
        }}
        return mp;
    }

    @RequestMapping(value = "/clone/{id}/{id1}", method = RequestMethod.POST)
    @ResponseBody
    public Shape clone(@PathVariable int id,@PathVariable int id1){
        Map<Integer,Object>new_map=new HashMap<>();
        Shape shape= (Shape) u_object.peek().get(id);
        Shape cloned=shape.clone();
        cloned.settype(shape.getType());
        cloned.setId(id1);
        cloned.setX(shape.getX()+30);
        cloned.setY(shape.getY()+30);
        cur.put(id1,cloned);
        new_map.putAll(cur);
        u_object.push(new_map);
        undo.push(id1);
        r_object.clear();
        redo.clear();
        return cloned;
    }
    @RequestMapping(value = "/restart", method = RequestMethod.POST)
    @ResponseBody
    public Result restart() {
        cur.clear();
        u_object.clear();
        r_object.clear();
        undo.clear();
        redo.clear();
        return new Result("The app is restarted",true);
    }


}



