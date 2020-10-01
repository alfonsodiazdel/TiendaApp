import { UsuarioService } from './../../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(private UsuarioService:UsuarioService, private router: Router, private activatedRoute: ActivatedRoute) { 
  }
  tipo:string
  ngOnInit(): void {

    this.tipo = localStorage.getItem('tipo');
  }

  
  signOut(): void {
    
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
