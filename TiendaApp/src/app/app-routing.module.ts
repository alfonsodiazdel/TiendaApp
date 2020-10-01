import { CanActivateGuard } from './can-activate.guard';
import { LoginComponent } from './components/login/login.component';
import { CarroResolverGuard } from './resolvers/carro-resolver.guard';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductoComponent} from './components/producto/producto.component'
import {CarroComponent} from './components/carro/carro.component'


const routes: Routes = [{path:'login',component:LoginComponent},{path:'productos',component:ProductoComponent,canActivate:[CanActivateGuard]},
{path:'carro',component:CarroComponent,resolve:{carro:CarroResolverGuard},canActivate:[CanActivateGuard]},
{path:'mantenimiento',component:MantenimientoComponent,canActivate:[CanActivateGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
