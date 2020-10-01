import { DialogproductoComponent } from './../dialogproducto/dialogproducto.component';

import { Producto } from './../../models/producto';
import { ProductoService } from './../../services/producto.service';
import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {

  productos : MatTableDataSource<Producto>
  tamano:number
  displayedColumns: string[] = ['CODIGO', 'MARCA', 'DESCRIPCION', 'PRECIO','ELIMINAR','ACTUALIZAR'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog,private productoservice:ProductoService) {
      this.obtenerProductos();
      
  }
  
  ngOnInit(): void {
  }

  openDialog(accion:String,producto: Producto){
    let dialogRef:MatDialogRef<DialogproductoComponent>
    switch(accion){
      case 'NUEVO':
        dialogRef = this.dialog.open(DialogproductoComponent,{
          width: '300px',
          data:{accion: accion, producto:producto}
        })
        break;
      case 'ACTUALIZAR':
        dialogRef = this.dialog.open(DialogproductoComponent,
          {width:'300px',data:{
            accion: accion,
            producto: producto
          }})
        break;
    }
    dialogRef.afterClosed().subscribe(res=>{
      this.obtenerProductos(); 
    })
  }

  obtenerProductos(){
    this.productoservice.getProductos(0,0).subscribe(res=>{
      let data: Producto[] = []
      data = res.productos
      this.productos = new MatTableDataSource<Producto>(data)
      this.productos.paginator = this.paginator;
    })
  }

  nuevoProducto(){
    this.openDialog('NUEVO',new Producto(0,'',0.0,'',''))
    
  }

  actualizarProducto(producto:Producto){
    this.openDialog('ACTUALIZAR',producto)
  }

  eliminarProducto(id:number){
    this.productoservice.deleteProducto(id).subscribe(res=>{
      console.log("ELIMINADO : " + id)
      this.obtenerProductos();
    },err=>{
      console.log(err)
    })
    
    
  }
}
