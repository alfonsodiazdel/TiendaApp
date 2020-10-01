import { Producto } from './../models/producto';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient: HttpClient) { }
  getProductos(page:number,num:number): Observable<any>{

    let headers = new HttpHeaders();
    headers.append('Origin','http://localhost:4200')
    return this.httpClient.get(`http://localhost:55116/api/Producto?page=${page}&num=${num}`,{headers})
  }

  addProducto(producto : Producto){
    let json = JSON.stringify(producto)
    let headers = new HttpHeaders().set('Content-Type','application/json')
    headers.append('Origin','http://localhost:4200')
    return this.httpClient.post('http://localhost:55116/api/Producto',json,{headers})
  }

  deleteProducto(id:number){
    let headers = new HttpHeaders().set('Content-Type','application/json')
    headers.append('Origin','http://localhost:4200')
    return this.httpClient.delete(`http://localhost:55116/api/Producto/${id}`, {headers})
  }
  updateProducto(producto: Producto){
    let json = JSON.stringify(producto)
    let headers = new HttpHeaders().set('Content-Type','application/json')
    headers.append('Origin','http://localhost:4200')
    return this.httpClient.put(`http://localhost:55116/api/Producto/${producto.idProducto}`,json,{headers})
  }
}
