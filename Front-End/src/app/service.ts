import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { result } from './result';
import { JsonPipe } from '@angular/common';
import { applyStyles } from '@popperjs/core';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class ApiserveService {
  path:String='';
  constructor(private http: HttpClient) { }
  addshape(path: String,id:number, body: Object = {}): Observable<any>{
    return this.http.post<any>(`${environment.api_url}/add/${path}/${id}`, body);
  }
  undo(): Observable<any>{
    
    return this.http.post<any>(`${environment.api_url}/undo`,null);
  }
  redo(): Observable<any>{
    return this.http.post<any>(`${environment.api_url}/redo`, null);
  }
  save(path: String,name:string,t:boolean): Observable<any>{
    
    if(t)this.path=path+'/'+name+'.xml';
    else this.path=path+'/'+name+'.json';
    return this.http.post<any>(`${environment.api_url}/save/${t}`,this.path);
  }
  load(path: String): Observable<any>{
    if(path.endsWith(".json")){return this.http.post<any>(`${environment.api_url}/load/false`, path);}
    else return this.http.post<any>(`${environment.api_url}/load/true`, path);
  }
  delete(id:number): Observable<any>{
   
    return this.http.post<any>(`${environment.api_url}/delete/${id}`, null);
  }
  modify(path: String,id:number, body: Object = {}): Observable<any>{
    return this.http.post<any>(`${environment.api_url}/modify/${path}/${id}`, body);
  }
  clear(): Observable<any>{
    return this.http.post<any>(`${environment.api_url}/restart`, null);
  }
  clone(id:number,id1:number): Observable<any>{
    return this.http.post<any>(`${environment.api_url}/clone/${id}/${id1}`, null);
  }
}
