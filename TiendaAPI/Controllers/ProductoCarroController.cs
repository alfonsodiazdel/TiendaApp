using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TiendaAPI.Contexts;
using TiendaAPI.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TiendaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoCarroController : ControllerBase
    {

        private readonly AppDbContext context;

        public ProductoCarroController(AppDbContext context)
        {
            this.context = context;
        }


        // POST api/<ProductoCarroController>
        [HttpPost]
        public Producto_Carro Post([FromBody] Producto_Carro value)
        {
            try
            {
                Producto_Carro result = context.Producto_Carro.FirstOrDefault(obj => obj.idProducto == value.idProducto && obj.idCarro == value.idCarro);
                if (result == null)
                {
                    context.Producto_Carro.Add(value);
                    context.SaveChanges();
                    result = context.Producto_Carro.Last();
                }
                return result;
            }catch(Exception err)
            {
                return null;
            }
        }
        
        // PUT api/<ProductoCarroController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Producto_Carro value)
        {
            if (value.idProducto_Carro == id)
            {
                context.Entry(value).State = EntityState.Modified;
                context.SaveChanges();
                return Ok();
            }
            else
                return BadRequest();
        }
        
        // DELETE api/<ProductoCarroController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var cp = context.Producto_Carro.FirstOrDefault(x => x.idProducto_Carro == id);
            if(cp != null)
            {
                context.Producto_Carro.Remove(cp);
                context.SaveChanges();
                return Ok();
            }
            else { 
                return BadRequest();
            }
        }
    }
}
