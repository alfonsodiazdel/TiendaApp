import { Carro } from './../../models/carro';
import { CarroService } from './../../services/carro.service';
import { DialogproductoAgregarComponent } from './../dialogproducto-agregar/dialogproducto-agregar.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Producto } from './../../models/producto';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() producto: Producto;
  @Output() modificado = new EventEmitter<boolean>();

  constructor(public dialog:MatDialog,private carroService:CarroService) {
   }

  ngOnInit(): void {
  }

  openDialog(){
    let dialogRef: MatDialogRef<DialogproductoAgregarComponent>
    dialogRef = this.dialog.open(DialogproductoAgregarComponent,
      {width:'300px',
        data:{
          Producto:this.producto
        }
      });
    dialogRef.afterClosed().subscribe(()=>{
      this.modificado.emit(true);
    }) 
   }

  

}
