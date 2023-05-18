import { Component } from '@angular/core';
import konva from "konva";
import { Circle } from './circle';
import { Ellipse } from './ellipse';
import { Line } from './line';
import { Rectangle } from './rectangle';
import { Square } from './square';
import { Triangle } from './triangle';
import { ApiserveService } from './service';
import { HttpClient } from '@angular/common/http';
import { ShapeFactory } from './factory';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Builder } from './paint/builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private drawit: ApiserveService, private http: HttpClient, private modalservice: NgbModal) { }
  title = 'paint';
  stage: any;
  layer: any;
  tr: any;
  
  factory = new ShapeFactory();
  builder=new Builder();
  shape1: any;
  shape2: any;
  shapefromback: any;
  deleteflag: boolean = false;
  rectangleflag: boolean = false;
  bordercolorflag: boolean = false;
  fillflag: boolean = false;
  ellipseflag: boolean = false;
  lineflag: boolean = false;
  triangleflag: boolean = false;
  squareflag: boolean = false;
  circleflag: boolean = false;
  cloneflag: boolean = false;

  pos: any;
  xposition: any;
  colour: any = 'black';
  currentpositon: any;
  shapename: string = '';
  event_id: any;
  id: number = 0;

  FileName: string = '';
  FilePath: string = '';
  LoadFilePath: string = '';
  checktype:string='';
  check1: boolean = true;
  check2: boolean = true;
  closeResult: string | undefined;


  ngOnInit() {
    this.stage = new konva.Stage({
      container: "whiteboard",
      width: 1200,
      height: 700,
    });
    this.layer = new konva.Layer();
    this.stage.add(this.layer);
    this.tr = new konva.Transformer();
    this.layer.add(this.tr);
  }
  resize(){
    this.stage.off();
    this.stage.on('click', (p: any) => {
      this.event_id = p.target.attrs.id;
      var shape = this.stage.findOne("#" + this.event_id);
      if(!this.fillflag&&!this.bordercolorflag){
      if (shape == undefined) {
        this.tr.nodes([]);
        this.currentpositon = p.currenttarget;
        this.shape1.setDraggable(false);
      }
      else {
        this.shape1.setDraggable(false);
        this.tr.nodes([shape]);
        this.shape1=shape;
        this.shape1.setDraggable(true);
      }}
    })
    this.shape1.on('transformend', ()=> {
      console.log(this.shape1);
      this.shapefromback=this.builder.build(this.shape1.className,this.shape1)
      this.drawit.modify(this.shapefromback.type, this.shapefromback.id, this.shapefromback).subscribe(
        res => { console.log(res); });
      });
      this.shape1.on('dragend', ()=> {
      console.log(this.shape1);
      this.shapefromback=this.builder.build(this.shape1.className,this.shape1)
      this.drawit.modify(this.shapefromback.type, this.shapefromback.id, this.shapefromback).subscribe(
        res => { console.log(res); });
    });
  }

  setfilename(name: string) {
    this.FileName = name;
    if (this.FileName != '' && this.FilePath != ''&&this.checktype!='') {
      this.check1 = false;
    }
  }
  setfilepath(path: string) {
    this.FilePath = path;
    if (this.FileName != '' && this.FilePath != ''&&this.checktype!='') {
      this.check1 = false;
    }

  }
  setexttype(extension:string){
    this.checktype=extension;
    if(this.FileName!=''&&this.FilePath!=''&&this.checktype!=''){
      this.check1=false;
    }
  }
  setloadfilepath(path: string) {
    this.LoadFilePath = path;
    if (this.LoadFilePath != '') {
      this.check2 = false;
    }
  }
  opens(content: any) {
    this.modalservice.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.check1=true;
    this.checktype='';
    this.FilePath='';
    this.FileName='';
  }
  openl(content: any) {
    this.modalservice.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.check2=true;
    this.LoadFilePath='';
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  draw(shapename: string) {
    if (shapename == 'rectangle') {
      this.reset();
      this.rectangleflag = true;
      this.shapefromback = new Rectangle();
      this.stage.on('click', () => {
        if (this.rectangleflag == true) {
          var pos = this.stage.getPointerPosition();
          this.shapefromback.x = pos.x;
          this.shapefromback.y = pos.y;
          this.shapefromback.id = this.id;
          this.drawit.addshape(this.shapefromback.type, this.id, this.shapefromback).subscribe(
            res => { console.log(res); });
          this.shape1 = new konva.Rect({
            id: this.id.toString(),
            x: this.shapefromback.x,
            y: this.shapefromback.y,
            width: this.shapefromback.width,
            height: this.shapefromback.height,
            stroke: this.shapefromback.stroke,
            strokeWidth: this.shapefromback.strokeWidth,
            fill: this.shapefromback.fill,
            strokeScaleEnabled: false,
            draggable: false,
          });
          this.layer.add(this.shape1);
          this.resize();
        }
        this.rectangleflag = false;
      }
      
      )
    }
    else if (shapename == 'square') {
      this.reset();
      this.squareflag = true;
      this.shapefromback = new Square();
      this.stage.on('click', () => {
        if (this.squareflag == true) {
          var pos = this.stage.getPointerPosition();
          this.shapefromback.x = pos.x;
          this.shapefromback.y = pos.y;
          this.shapefromback.id = this.id;
          this.drawit.addshape(this.shapefromback.type, this.id, this.shapefromback).subscribe(
            res => { console.log(res); });
          this.shape1 = new konva.Rect({
            id: this.id.toString(),
            x: this.shapefromback.x,
            y: this.shapefromback.y,
            width: this.shapefromback.length,
            height: this.shapefromback.length,
            stroke: this.shapefromback.stroke,
            strokeWidth: this.shapefromback.strokeWidth,
            strokeScaleEnabled: false,
            draggable: false,
          });
          this.layer.add(this.shape1);
          this.resize();
          
        }
        this.squareflag = false;
      })


    }
    else if (shapename == 'triangle') {
      this.reset();
      this.triangleflag = true;
      this.shapefromback = new Triangle();
      this.stage.on('click', () => {
        if (this.triangleflag == true) {
          var pos = this.stage.getPointerPosition();
          this.shapefromback.x = pos.x;
          this.shapefromback.y = pos.y;
          this.shapefromback.id = this.id;
          this.drawit.addshape(this.shapefromback.type, this.id, this.shapefromback).subscribe(
            res => { console.log(res); });
          this.shape1 = new konva.RegularPolygon({
            id: this.id.toString(),
            x: this.shapefromback.x,
            y: this.shapefromback.y,
            sides: this.shapefromback.sides,
            radius: this.shapefromback.radius,
            stroke: this.shapefromback.stroke,
            strokeWidth: this.shapefromback.strokeWidth,
            strokeScaleEnabled: false,
            draggable: false,
          });
          this.layer.add(this.shape1); 
          this.resize();
        }
        this.triangleflag=false;
      })

    }
    else if (shapename == 'line') {
      this.reset();
      this.lineflag = true;
      this.shapefromback = new Line();
      this.stage.on('click', () => {
        if (this.lineflag == true) {
          var pos = this.stage.getPointerPosition();
          this.shapefromback.x = pos.x;
          this.shapefromback.y = pos.y;
          this.shapefromback.id = this.id;
          this.drawit.addshape(this.shapefromback.type, this.id, this.shapefromback).subscribe(
            res => { console.log(res); });
          this.shape1 = new konva.Line({
            id: this.id.toString(),
            x: this.shapefromback.x,
            y: this.shapefromback.y,
            points: this.shapefromback.points,
            stroke: this.shapefromback.stroke,
            strokeWidth: this.shapefromback.strokeWidth,
            strokeScaleEnabled: false,
            draggable: false,
          });
          this.layer.add(this.shape1);    
          this.resize();
        }
        this.lineflag = false;
      })

    }
    else if (shapename == 'ellipse') {
      this.reset();
      this.ellipseflag = true;
      this.shapefromback = new Ellipse();
      this.stage.on('click', () => {
        if (this.ellipseflag == true) {
          var pos = this.stage.getPointerPosition();
          this.shapefromback.x = pos.x;
          this.shapefromback.y = pos.y;
          this.shapefromback.id = this.id;
          this.drawit.addshape(this.shapefromback.type, this.id, this.shapefromback).subscribe(
            res => { console.log(res); });
          this.shape1 = new konva.Ellipse({
            id: this.id.toString(),
            x: this.shapefromback.x,
            y: this.shapefromback.y,
            radiusX: this.shapefromback.radiusX,
            radiusY: this.shapefromback.radiusY,
            stroke: this.shapefromback.stroke,
            strokeWidth: this.shapefromback.strokeWidth,
            strokeScaleEnabled: false,
            draggable: false,
          });
          this.layer.add(this.shape1);
          this.resize();
          
        }
        this.ellipseflag = false;
      })
    }
    else if (shapename == 'circle') {
      this.circleflag = true;
      this.shapefromback = new Circle();
      this.stage.on('click', () => {
        if (this.circleflag == true) {
          var pos = this.stage.getPointerPosition();
          this.shapefromback.x = pos.x;
          this.shapefromback.y = pos.y;
          this.shapefromback.id = this.id;
          this.drawit.addshape(this.shapefromback.type, this.id, this.shapefromback).subscribe(
            res => { console.log(res); });
          this.shape1 = new konva.Circle({
            id: this.id.toString(),
            x: this.shapefromback.x,
            y: this.shapefromback.y,
            radius: this.shapefromback.radius,
            stroke: this.shapefromback.stroke,
            strokeWidth: this.shapefromback.strokeWidth,
            strokeScaleEnabled: false,
            draggable: false,
          })
          this.layer.add(this.shape1);
          
          this.resize();
        }
        this.circleflag = false;
      })
    }
    this.id++;
  }

  drawback(shapename: string, shape: any) {
    if (shapename == 'rectangle') {
      this.reset();
      this.rectangleflag = true;
      this.shapefromback = shape;
      if (this.rectangleflag == true) {
        this.shape1 = new konva.Rect({
          id: this.shapefromback.id.toString(),
          x: this.shapefromback.x,
          y: this.shapefromback.y,
          width: this.shapefromback.width,
          height: this.shapefromback.height,
          stroke: this.shapefromback.stroke,
          scaleX: this.shapefromback.scaleX,
          scaleY: this.shapefromback.scaleY,
          strokeWidth: this.shapefromback.strokeWidth,
          rotation: this.shapefromback.rotation_angle,
          fill: this.shapefromback.fill,
          strokeScaleEnabled: false,
          draggable: false,
        });
        this.layer.add(this.shape1);
      }
      this.rectangleflag = false;
      this.resize();
    }
    else if (shapename == 'square') {
      this.reset();
      this.squareflag = true;
      this.shapefromback = shape;
      if (this.squareflag == true) {
        this.shape1 = new konva.Rect({
          id: this.shapefromback.id.toString(),
          x: this.shapefromback.x,
          y: this.shapefromback.y,
          width: this.shapefromback.length,
          height: this.shapefromback.length,
          stroke: this.shapefromback.stroke,
          strokeWidth: this.shapefromback.strokeWidth,
          scaleX: this.shapefromback.scaleX,
          scaleY: this.shapefromback.scaleY,
          fill: this.shapefromback.fill,
          rotation: this.shapefromback.rotation_angle,
          strokeScaleEnabled: false,
          draggable: false
        });
        this.layer.add(this.shape1);
      }
      this.squareflag = false;
      this.resize();
    }
    else if (shapename == 'triangle') {
      this.reset();
      this.triangleflag = true;
      this.shapefromback = shape;
      if (this.triangleflag == true) {
        this.shape1 = new konva.RegularPolygon({
          id: this.shapefromback.id.toString(),
          x: this.shapefromback.x,
          y: this.shapefromback.y,
          sides: this.shapefromback.sides,
          radius: this.shapefromback.radius,
          scaleX: this.shapefromback.scaleX,
          scaleY: this.shapefromback.scaleY,
          rotation: this.shapefromback.rotation_angle,
          stroke: this.shapefromback.stroke,
          fill: this.shapefromback.fill,
          strokeWidth: this.shapefromback.strokeWidth,
          strokeScaleEnabled: false,
          draggable: false
        });
        this.layer.add(this.shape1);
      }
      this.triangleflag = false;
      this.resize();
    }
    else if (shapename == 'line') {
      this.reset();
      this.lineflag = true;
      this.shapefromback = shape;
      if (this.lineflag == true) {
        this.shape1 = new konva.Line({
          id: this.shapefromback.id.toString(),
          x: this.shapefromback.x,
          y: this.shapefromback.y,
          points: this.shapefromback.points,
          stroke: this.shapefromback.stroke,
          scaleX: this.shapefromback.scaleX,
          scaleY: this.shapefromback.scaleY,
          rotation: this.shapefromback.rotation_angle,
          strokeWidth: this.shapefromback.strokeWidth,
          strokeScaleEnabled: false,
          draggable: false
        });
        this.layer.add(this.shape1);
      }
      this.lineflag = false;
      this.resize();
    }
    else if (shapename == 'ellipse') {
      this.reset();
      this.ellipseflag = true;
      this.shapefromback = shape;
      if (this.ellipseflag == true) {
        this.shape1 = new konva.Ellipse({
          id: this.shapefromback.id.toString(),
          x: this.shapefromback.x,
          y: this.shapefromback.y,
          radiusX: this.shapefromback.radiusX,
          radiusY: this.shapefromback.radiusY,
          scaleX: this.shapefromback.scaleX,
          scaleY: this.shapefromback.scaleY,
          fill: this.shapefromback.fill,
          rotation: this.shapefromback.rotation_angle,
          stroke: this.shapefromback.stroke,
          strokeWidth: this.shapefromback.strokeWidth,
          strokeScaleEnabled: false,
          draggable: false,
        });
        this.layer.add(this.shape1);
      }
      this.ellipseflag = false;
      this.resize();
    }
    else if (shapename == 'circle') {
      this.circleflag = true;
      this.shapefromback = shape;
      if (this.circleflag == true) {
        this.shape1 = new konva.Circle({
          id: this.shapefromback.id.toString(),
          x: this.shapefromback.x,
          y: this.shapefromback.y,
          scaleX: this.shapefromback.scaleX,
          scaleY: this.shapefromback.scaleY,
          fill: this.shapefromback.fill,
          radius: this.shapefromback.radius,
          stroke: this.shapefromback.stroke,
          strokeWidth: this.shapefromback.strokeWidth,
          strokeScaleEnabled: false,
          draggable: false
        })
        this.layer.add(this.shape1);
      }
      this.circleflag = false;
      this.resize();
    }
  }
  delete() {
    this.reset();
    this.deleteflag = true;
    this.stage.on('click', (e: any) => {
      this.event_id = e.target.attrs.id;
      var shape = this.stage.findOne("#" + this.event_id);
      if (this.deleteflag == true) {
        if (shape != undefined) {
          this.drawit.delete(this.event_id).subscribe(
            res => { console.log(res) });
          shape.destroy();
          this.deleteflag = false;
          this.tr.nodes([]);
        }
        else this.deleteflag = false;
      }
    })
  }

  colorize() {
    this.reset();
    this.fillflag = true;
    this.stage.on('click', (e: any) => {
    this.event_id = e.target.attrs.id;
    var shape = this.stage.findOne("#" + this.event_id);
    if (this.fillflag == true) {
      if (shape != undefined) {
        shape.fill(this.colour);
        if (shape.className == 'Rect' && shape.width == shape.height) {
          this.shape2 = this.factory.getshape("Square");
          this.shape2 = this.builder.build("Square", shape);
        } 
        else {
          this.shape2 = this.factory.getshape(shape.className);
          this.shape2 = this.builder.build(shape.className, shape);
        }
        this.fillflag = false;
        this.tr.nodes([]);
        this.drawit.modify(this.shape2.type, this.shape2.id, this.shape2).subscribe(
            res => { console.log(res); });
        }
      this.fillflag = false;
    }
    })

  }
  bordercolor() {
    this.reset();
    this.bordercolorflag = true;
    this.stage.on('click', (e: any) => {
      this.event_id = e.target.attrs.id;
      var shape = this.stage.findOne("#" + this.event_id);
      if (this.bordercolorflag == true) {
        if (shape != undefined) {
          shape.stroke(this.colour);
          this.tr.nodes([]);
          if(shape.className=='Rect'&& shape.width==shape.height){
            this.shape2 =this.factory.getshape("Square");
            this.shape2=this.builder.build("Square",shape);
        }else {
          this.shape2 =this.factory.getshape(shape.className);
          this.shape2=this.builder.build(shape.className,shape);
        }
        this.drawit.modify(this.shape2.type, this.shape2.id, this.shape2).subscribe(
          res => {console.log(res);});
        }
        this.bordercolorflag = false;
      }
    })

  }
  
  change_colour(col: any) {
    this.colour = col;
  }

  reset() {
    this.ellipseflag = false;
    this.rectangleflag = false;
    this.circleflag = false;
    this.squareflag = false;
    this.lineflag = false;
    this.triangleflag = false;
    this.deleteflag = false;
    this.fillflag= false;
    this.bordercolorflag= false;
  }
  saved() {
    if(this.checktype=="xml")
    this.drawit.save(this.FilePath, this.FileName,true).subscribe(
      res => {console.log(res);});
    else
    this.drawit.save(this.FilePath, this.FileName,false).subscribe(
      res => {console.log(res);});
  }

  undo() {
    this.drawit.undo().subscribe(
      res => {
        if (res == null) alert("Can't Undo");
        else {
          this.layer.destroy();
          this.layer = new konva.Layer();
          this.stage.add(this.layer);
          this.tr = new konva.Transformer();
          this.layer.add(this.tr);
          console.log(res);
          type myMap = Record<number, any>;
          const shape: myMap = res[res.length - 1];
          for (const key in shape) {
            this.drawback(shape[key].type, shape[key]);
          }
        }
      }
    );
  }

  redo() {
    this.drawit.redo().subscribe(
      res => {
        if (res == null) alert("Can't Redo");
        else {
          this.layer.destroy();
          this.layer = new konva.Layer();
          this.stage.add(this.layer);
          this.tr = new konva.Transformer();
          this.layer.add(this.tr);
          console.log(res);
          type myMap = Record<number, any>;
          const shape: myMap = res[res.length - 1];
          for (const key in shape) {
            if (shape[key] != null)
              this.drawback(shape[key].type, shape[key]);
          }
        }
      }
    );
  }

  loadshapes() {
    this.drawit.load(this.LoadFilePath).subscribe(
      res => {
        if(res==null)alert("Error: corrupted file ");
        else{
          this.layer.destroy();
          this.layer = new konva.Layer();
          this.stage.add(this.layer);
          this.tr = new konva.Transformer();
          this.layer.add(this.tr);
          console.log(res);
          type myMap = Record<number, any>;
          const shape: myMap = res;
          for (const key in shape) {
            this.drawback(shape[key].type, shape[key]);
        }
      }}
    );

  }
  clear(){
    this.reset();
    this.id=0;
    this.shapefromback=null;
    this.shape1=null;
    this.shape2=null;
    this.stage.destroy();
    this.stage = new konva.Stage({
      container: "whiteboard",
      width: 1200,
      height: 700,
    });
    this.layer = new konva.Layer();
    this.stage.add(this.layer);
    this.tr = new konva.Transformer();
    this.layer.add(this.tr);
    this.drawit.clear().subscribe(res=>{console.log(res);});
  }
  clone(){
    this.reset();
    this.cloneflag=true;
    this.stage.on('click', (e: any) => {
      this.event_id = e.target.attrs.id;
      var shape = this.stage.findOne("#" + this.event_id);
      if (this.cloneflag == true) {
        if (shape != undefined) { 
          this.drawit.clone(this.event_id,++this.id).subscribe(res=>{ console.log(res);this.drawback(res.type,res)});
            }
        this.cloneflag = false;
      }})
  }


}