import { Usuario } from './../../models/usuario';
import { UsuarioService } from './../../services/usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { throwIfEmpty } from 'rxjs/operators';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authService: SocialAuthService, private router: Router,private usuarioService:UsuarioService) { }
  usuario:Usuario
  ngOnInit(): void {
      if(localStorage.getItem('idUsuario')){
        this.router.navigate(['/'])
      }

  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res=>{
      this.usuario = new Usuario(0,res.name,res.email,res.photoUrl,1,null);
      this.usuarioService.postUsuario(this.usuario).subscribe((res:any)=>{
        console.log(res)
        localStorage.setItem('idUsuario',res.idUsuario + '');
        localStorage.setItem('tipo',res.tipo.descripcion);
        localStorage.setItem('nombre',res.nombre)
        localStorage.setItem('foto',res.foto)
        if(res.tipo.descripcion == 'USUARIO')
          this.router.navigate(['/productos'])
        else
          this.router.navigate(['/mantenimiento'])
      })
    }).catch(err=>{
    });

 
  }

}
