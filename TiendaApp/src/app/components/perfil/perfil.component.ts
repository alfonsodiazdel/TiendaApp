import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  nombre:string;
  tipo:string;
  foto:string;

  @Input() logout:boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.nombre = localStorage.getItem('nombre')
    this.tipo = localStorage.getItem('tipo')
    this.foto = localStorage.getItem('foto')
  }

  

}
