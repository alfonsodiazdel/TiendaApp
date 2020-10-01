import { UsuarioService } from './../../services/usuario.service';
import { Carro } from './../../models/carro';
import { Subscriber } from 'rxjs';
import { CarroService } from './../../services/carro.service';
import { ProductoService } from './../../services/producto.service';
import { Producto } from './../../models/producto';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos :Producto[] = []
  length:number

  constructor(private productoservice : ProductoService) {
    this.obtenerProductos(1,17)

   }

  ngOnInit(): void {

  }



  agregarProducto(Producto:Producto){
    this.productoservice.addProducto(Producto).subscribe(res =>{
      
    },err=>{

    })
  }

  deleteProducto(id:number){
    this.productoservice.deleteProducto(id);
  }

  obtenerProductos(page,num){
    this.productoservice.getProductos(page,num).subscribe(res=>{
      this.productos = res.productos
      this.length = res.tamano
    },err=>{
      console.log("FALLO EN OBTENER PRODUCTOS")
    })   
  }



  trackByFn(index,item){
    return item.idProducto
  }


}
