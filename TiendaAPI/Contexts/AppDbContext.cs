using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TiendaAPI.Entities;

namespace TiendaAPI.Contexts
{
    public class AppDbContext :DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options){
            
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Producto>().HasMany(e => e.Producto_Carros).WithOne(e => e.Producto).OnDelete(DeleteBehavior.ClientCascade);
            base.OnModelCreating(builder);
        }
        public DbSet<Producto> Producto { get; set; }

        public DbSet<Usuario> Usuario { get; set; }


        public DbSet<Carro> Carro { get; set; }
        public DbSet<Producto_Carro> Producto_Carro { get; set; }

        public DbSet<Tipo> Tipo { get; set; }

    }
}
