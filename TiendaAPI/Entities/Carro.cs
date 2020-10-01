using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TiendaAPI.Entities
{
    public class Carro
    {
  
        [Key]
        public int idCarro { get; set; }
        
        public int idUsuario { get; set; }
        public bool activo { get; set; }

        [InverseProperty("Carro")]
        public virtual ICollection<Producto_Carro> Prod_Carr { get; set; }

    }
}
