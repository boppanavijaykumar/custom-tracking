using Microsoft.EntityFrameworkCore;
using System;
using TSA.Data.Configurations;
using TSA.Models;

namespace TSA.Data
{
    public class TsaContext : DbContext
    {
        public DbSet<CustomTrackingCode> CustomTrackingCode { get; set; }

        protected override void OnModelCreating(Microsoft.EntityFrameworkCore.ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new TsaConfiguration());
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=.; Database=TSA; Trusted_Connection=True; MultipleActiveResultSets=True;");
            base.OnConfiguring(optionsBuilder);
        }
    }
}
