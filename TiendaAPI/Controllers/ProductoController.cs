using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TiendaAPI.Entities;
using TiendaAPI.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TiendaAPI.Contexts
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {


        private readonly AppDbContext context;
        public ProductoController(AppDbContext context)
        {
            this.context = context;
        }

        // GET: api/<ProductoController>
        [HttpGet]
        public ProductoModel Get([FromQuery(Name = "page")] int page = 0, [FromQuery(Name = "num")] int num = 0)
        {
            ProductoModel pm = new ProductoModel();
            var list = context.Producto.ToList();
            if (page != 0 && num != 0)
            {                                                                                                                       
                pm.Tamano = list.Count();
                pm.Productos = list.Skip((page - 1) * num).Take(num);
                return pm;

            }

            pm.Productos=list;
            return pm;
           
        }

        // GET api/<ProductoController>/5
        [HttpGet("{id}")]
        public Producto Get(int id)
        { 
            var producto = context.Producto.FirstOrDefault(p => p.idProducto == id);
            return producto;
        }

        // POST api/<ProductoController>
        [HttpPost]
        public ActionResult Post([FromBody] Producto producto)
        {
            try
            {
                context.Producto.Add(producto);
                context.SaveChanges();
                return Ok();
            }
            catch (Exception err)
            {
                return BadRequest();
            }
        }

        // PUT api/<ProductoController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Producto producto)
        {
            try
            {
                if (producto.idProducto == id) {
                    context.Entry(producto).State = EntityState.Modified;
                    context.SaveChanges();
                    return Ok();
                }
                return BadRequest();
            }
            catch (Exception err) {
                return BadRequest();
            }
        }

        // DELETE api/<ProductoController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var producto = context.Producto.FirstOrDefault(p => p.idProducto == id);
            if (producto != null) {
                context.Producto.Remove(producto);
                context.SaveChanges();
                return Ok();
            }else
                return BadRequest();

        }
    }
}
