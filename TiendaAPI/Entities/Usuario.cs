using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TiendaAPI.Entities
{
    public class Usuario
    {

        [Key]
        public int idUsuario { get; set; }
        public string nombre { get; set; }
        public string email { get; set; }
        public string foto { get; set; }

        
        [ForeignKey("idTipo")]
        public virtual Tipo Tipo { get; set; }
        public int idTipo { get; set; }
    }
}
