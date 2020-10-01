using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TiendaAPI.Entities
{
    public class Producto
    {


        [Key]
        public int idProducto { get; set; }
        public string marca { get; set; }
        public decimal precio { get; set; }
        public string descripcion { get; set; }
        public string foto { get; set; }
        [InverseProperty("Producto")]
        public virtual IEnumerable<Producto_Carro> Producto_Carros{get;set;}

    }
}
