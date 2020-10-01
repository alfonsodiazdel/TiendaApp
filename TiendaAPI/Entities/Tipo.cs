using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TiendaAPI.Entities
{
    public class Tipo
    {


        [Key]
        public int idTipo { get; set; }
        public string descripcion { get; set; }

    }
}
