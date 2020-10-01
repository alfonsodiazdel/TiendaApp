using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TiendaAPI.Entities;

namespace TiendaAPI.Model
{
    public class ProductoModel
    {   
        public int Tamano { get; set; }
    
        public IEnumerable<Producto> Productos { get; set; }
    }
    
}
