using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TiendaAPI.Entities
{
    public class Producto_Carro
    {   

        [Key]
        public int idProducto_Carro { get; set; }
        
        public int idCarro { get; set; }
        
        public int idProducto { get; set; }
        public int cantidad { get; set; }
        [ForeignKey("idCarro")]
        public virtual Carro Carro { get; set; }

        [ForeignKey("idProducto")]
        public virtual Producto Producto { get; set; }
        

    }
}
