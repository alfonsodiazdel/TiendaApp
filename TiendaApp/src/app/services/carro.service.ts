import { Observable } from 'rxjs';
import { Carro } from './../models/carro';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private httpClient:HttpClient) { }

  getCarro():Observable<any>{
    let headers = new HttpHeaders()
    headers.append('Origin','http://localhost:4200')
    return this.httpClient.get(`http://localhost:55116/api/Carro/${localStorage.getItem('idUsuario')}`,{headers});
  }

  addCarro():Observable<any>{
    let json = JSON.stringify(new Carro(0,Number(localStorage.getItem('idUsuario')),true,null));
    let headers = new HttpHeaders().set('Content-Type','application/json')
    headers.append('Origin','http://localhost:4200')
    return this.httpClient.post('http://localhost:55116/api/Carro',json,{headers})
  }

  updateCarro(carro:Carro){
    carro.activo=false;
    let json = JSON.stringify(carro);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    headers.append('Origin','http://localhost:4200')
    return this.httpClient.put(`http://localhost:55116/api/Carro/${carro.idCarro}`,json,{headers})
  }
}
