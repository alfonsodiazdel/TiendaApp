import { Producto } from './../models/producto';
import { Usuario } from './../models/usuario';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient:HttpClient) { }

  getUsuario(id:number):Observable<any>{
    let headers = new HttpHeaders().set('Origin','http://locahost:4200')
    return this.httpClient.get('http://localhost:55116/api/Usuario/'+id,{headers})
  } 

  postUsuario(usuario:Usuario){
    let json = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type','application/json')
    return this.httpClient.post('http://localhost:55116/api/Usuario',json,{headers})
  }
}
