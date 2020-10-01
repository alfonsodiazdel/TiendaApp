import { CarroService } from './../services/carro.service';

import { Carro } from './../models/carro';
import { Injectable, resolveForwardRef } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CarroResolverGuard implements Resolve<Carro> {
  constructor(private carroService:CarroService,private router:Router){
  }

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): Carro | Observable<Carro> | Promise<Carro>{

      return this.carroService.getCarro().pipe(catchError(err=>{
        this.router.navigate(['/productos'])
        return EMPTY
      }))

    }
  }

  
  

