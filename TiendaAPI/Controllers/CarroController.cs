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
    public class CarroController : ControllerBase
    {

        private readonly AppDbContext context;

        public CarroController(AppDbContext context)
        {
            this.context = context;
        }

        // GET: api/<CarroController>
        [HttpGet]
        public IEnumerable<Carro> Get()
        {
            return context.Carro.ToList();
        }

        // GET api/<CarroController>/5
        [HttpGet("{id}")]
        public Carro Get(int id)
        {

            var obj = context.Carro.FirstOrDefault(c => c.idUsuario == id && c.activo == true);
            return obj;
            
            
        }

        // POST api/<CarroController>
        [HttpPost]
        public Carro Post([FromBody] Carro carro)
        {
            try
            {
                context.Carro.Add(carro);
                context.SaveChanges();
                Carro obj = context.Carro.FirstOrDefault(obj => obj.activo == true && obj.idUsuario == carro.idUsuario);
                return obj;
            }catch(Exception err){
                return null;
            }
        }

        // PUT api/<CarroController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Carro value)
        {
            try
            {
                if(value.idCarro == id)
                {
                    context.Entry(value).State = EntityState.Modified;
                    context.SaveChanges();
                    return Ok();
                }
                return BadRequest();
            }
            catch (Exception err)
            {
                return BadRequest();
            }
        }

    }
}
