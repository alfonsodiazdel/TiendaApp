import { Tipo } from './tipo';
export class Usuario {

    constructor(public idUsuario:number,
        public nombre:string,
        public email:string,
        public foto:string,
        public idTipo:number,
        public tipo:Tipo){
            this.idUsuario = idUsuario;
            this.nombre = nombre;
            this.email = email;
            this.foto = foto;
            this.idTipo = idTipo;
            this.tipo = tipo
    }
}
