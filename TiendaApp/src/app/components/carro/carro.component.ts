import { ProductoCarro } from './../../models/producto-carro';
import { Carro } from './../../models/carro';
import { CarroService } from './../../services/carro.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css'],
  providers:[CarroService]
})
export class CarroComponent implements OnInit {
  public carro : Carro 
  isLoaded: boolean = false;
  constructor(private carroService:CarroService,
    private router: Router, private route:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.route.data.subscribe((data:{carro:Carro}) =>{
      if(data.carro !==null || data.carro.prod_Carr.length > 0) 
        this.carro = data.carro;
      else
        this.nuevoCarro();
    })
  }
  obtenerCarro(){
    this.carroService.getCarro().subscribe(res=>{
        this.carro = res;
    })
  }

  nuevoCarro(){
    this.carroService.addCarro().subscribe(res=>{
      this.carro= res;
    },err=>{
      console.log(err)
    })
  }

  trackByFn(index: number){
    return index
  }

  refrescarCarro(event){
    console.log(event)
    if(event){
      this.obtenerCarro()
    }
  }

  total():number{
    let total:number = 0;
    this.carro.prod_Carr.forEach(obj =>{ total += obj.cantidad * obj.producto.precio})
    return total;
}

  pagar(){
    this.carroService.updateCarro(this.carro).subscribe(res=>{
      this.router.navigate(['/productos'])
    })
    }

    seguirComprando(){
      this.router.navigate(['/productos'])
    }
  }

