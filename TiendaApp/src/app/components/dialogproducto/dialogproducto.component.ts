import { ProductoService } from './../../services/producto.service';
import { Producto } from './../../models/producto';
import { Component, Inject, InjectionToken, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogproducto',
  templateUrl: './dialogproducto.component.html',
  styleUrls: ['./dialogproducto.component.css']
})
export class DialogproductoComponent implements OnInit {
  public producto_formulario: Producto = new Producto(0,'',0.0,'','')
  
  @Input() accion:String = ''
  
  constructor(public dialogRef: MatDialogRef<DialogproductoComponent>,
   @Inject(MAT_DIALOG_DATA) public data: DialogData,private productoService: ProductoService){ 

      this.producto_formulario.descripcion = data.producto.descripcion
      this.producto_formulario.idProducto = data.producto.idProducto
      this.producto_formulario.marca = data.producto.marca
      this.producto_formulario.precio = data.producto.precio

    }
  
  ngOnInit(): void {
  }
  onAgregar(){
    this.productoService.addProducto(this.producto_formulario).subscribe(ok=>{
      console.log(this.producto_formulario)
      console.log("PRODUCTO AGREGADO")
      this.dialogRef.close()
    },err=>{
      console.log(err)
    })
  }
  onActualizar(){
    this.productoService.updateProducto(this.producto_formulario).subscribe(res=>{
      console.log("PRODUCTO ACTUALIZADO")
      console.log(this.producto_formulario)
      this.dialogRef.close()
    },err=>{
      console.log(this.producto_formulario)
      console.log(err)

    })
  }
  onNoClick(){
    this.dialogRef.close();
  }
}
/* DATA  */
export interface DialogData{
  accion:String;
  producto:Producto;
}
