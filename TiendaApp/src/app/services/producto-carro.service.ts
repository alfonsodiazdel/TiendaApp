import { Observable } from 'rxjs';
import { Carro } from './../models/carro';
import { ProductoCarro } from './../models/producto-carro';
import { Producto } from './../models/producto';
import { HttpHeaders,HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoCarroService {

  constructor(private httpClient:HttpClient) { }

  addProducto_Carro(producto_carro:ProductoCarro):Observable<any>{
    let json = JSON.stringify(producto_carro);
    let headers = new HttpHeaders().set('Content-Type','application/json')
    headers.append('Origin','http://localhost:4200')
    return this.httpClient.post('http://localhost:55116/api/ProductoCarro/',json,{headers})
  }

  deleteProducto_Carro(id:number){
    return this.httpClient.delete(`http://localhost:55116/api/ProductoCarro/${id}`)
  }

  updateProductoCarro(producto_carro:ProductoCarro){
    let json = JSON.stringify(producto_carro)
    let headers = new HttpHeaders().set('Content-Type','application/json')
    headers.append('Origin','http://localhost:4200')
    return this.httpClient.put(`http://localhost:55116/api/ProductoCarro/${producto_carro.idProducto_Carro}`,json,{headers})
  }
}
