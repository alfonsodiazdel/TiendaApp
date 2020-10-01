using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TiendaAPI.Entities;
using Microsoft.AspNetCore.Mvc;
using TiendaAPI.Contexts;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TiendaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly AppDbContext context;
        public UsuarioController(AppDbContext context)
        {
            
            this.context = context;
        }

        // GET: api/<UsuarioController>
        [HttpGet]
        public IEnumerable<Usuario> Get()
        {
            return context.Usuario.ToList();
        }

        // GET api/<UsuarioController>/5
        [HttpGet("{id}")]
        public Usuario Get(int id)
        {
            var usuario = context.Usuario.FirstOrDefault(u => u.idUsuario == id);
            return usuario;
        }


        // POST api/<UsuarioController>
        [HttpPost]
        public Usuario Post([FromBody] Usuario value)
        {
            
            Usuario usuario = context.Usuario.FirstOrDefault(u => u.email == value.email);

            if (usuario == null) {
                context.Usuario.Add(value);
                context.SaveChanges();
                usuario = context.Usuario.FirstOrDefault(u => u.email == value.email);
                usuario.Tipo = context.Tipo.FirstOrDefault(t => t.idTipo == usuario.idTipo);
                return usuario;
            }
            else
            {
                return usuario;
            }

        }

        // PUT api/<UsuarioController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UsuarioController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
