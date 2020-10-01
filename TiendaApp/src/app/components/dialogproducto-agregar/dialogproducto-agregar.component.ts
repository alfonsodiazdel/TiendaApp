import { CarroService } from './../../services/carro.service';
import { Carro } from './../../models/carro';
import { ProductoCarro } from './../../models/producto-carro';
import { ProductoCarroService } from './../../services/producto-carro.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { Producto } from 'src/app/models/producto';


@Component({
  selector: 'app-dialogproducto-agregar',
  templateUrl: './dialogproducto-agregar.component.html',
  styleUrls: ['./dialogproducto-agregar.component.css']
})
export class DialogproductoAgregarComponent implements OnInit  {

  
  Carro:Carro = new Carro(0,2,true,null);

  producto_carrito = new ProductoCarro(0,0,0,1,null)

  constructor(public dialogRef:MatDialogRef<DialogproductoAgregarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogProductoData,
    private productoCarroService:ProductoCarroService,private carroService:CarroService) {
    }

    
  ngOnInit() {
    this.obtenerCarro();
  }

  onNoClick(){
    console.log(localStorage.getItem('tipo'))
    this.dialogRef.close()
  }

  onAgregar(){
    this.producto_carrito.idProducto = this.data.Producto.idProducto
    this.productoCarroService.addProducto_Carro(this.producto_carrito).subscribe(res=>{

      if(res !== null){

        this.producto_carrito.idCarro = res.idCarro
        this.productoCarroService.updateProductoCarro(this.producto_carrito).subscribe(res=>{
        },err=>{
     
        })
      }
      this.dialogRef.close();
    })
    
    
  }

  onType(event){
    return false;
  }

  obtenerCarro(){
    this.carroService.getCarro().subscribe(res=>{
      
      if(res !== null){
        this.Carro = res;
        this.obtenerProductoCarro();
        this.producto_carrito.idCarro = res.idCarro;
      }else{
        this.carroService.addCarro().subscribe(res=>{
        this.Carro = res;
        this.producto_carrito.idCarro = res.idCarro;
        })
      }
      
    })
  }

  obtenerProductoCarro(){
    try{
      let objPc = this.Carro.prod_Carr.find(obj=>obj.idProducto == this.data.Producto.idProducto)
      if(objPc != undefined){
        this.producto_carrito = objPc
      }
      
    }catch(err){
    }
  }

  quitarProducto(){
      this.productoCarroService.deleteProducto_Carro(this.producto_carrito.idProducto_Carro).subscribe(res=>{
        this.dialogRef.close();
      },err=>{
        this.dialogRef.close();
      })
  }


}
export interface DialogProductoData{
  Producto:Producto
}