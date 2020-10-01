export class Producto {

    idProducto: number;
    marca: String;
    precio: number;
     descripcion: String;
     foto:String;

    constructor(idProducto: number, marca: String, precio:number, descripcion:String,foto:String){
        this.idProducto =  idProducto;
        this.marca = marca;
        this.precio = precio;
        this.descripcion = descripcion;
        this.foto = foto;
    }
}
