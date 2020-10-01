import { Producto } from './producto';
import { Carro } from './carro';
export class ProductoCarro {

    idProducto_Carro:number;
    idCarro:number;
    idProducto:number;
    cantidad:number;
    producto:Producto

    constructor(idProducto_Carro:number,idCarro:number,idProducto:number,cantidad:number,Producto:Producto){
        this.idProducto_Carro = idProducto_Carro;
        this.idCarro = idCarro;
        this.idProducto = idProducto;
        this.cantidad = cantidad;
        this.producto = Producto
    }    

}
