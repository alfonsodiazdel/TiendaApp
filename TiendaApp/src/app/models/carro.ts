import { ProductoCarro } from './producto-carro';
export class Carro {

    idCarro:number;
    idUsuario:number;
    activo:boolean
    prod_Carr:ProductoCarro[]
    
    constructor(idCarro:number,idUsuario:number,activo:boolean,prod_Carr:ProductoCarro[]){
        this.idCarro = idCarro;
        this.idUsuario = idUsuario;
        this.activo = activo;
        this.prod_Carr = prod_Carr;
    }


}
