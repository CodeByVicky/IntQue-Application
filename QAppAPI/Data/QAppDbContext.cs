using Microsoft.EntityFrameworkCore;
using QAppAPI.Models;

namespace QAppAPI.Data
{
    public class QAppDbContext : DbContext
    {
        public QAppDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<ReactQuation> reactQuations { get; set; }

        public DbSet<JsQuation> jsQuations { get; set; }

        public DbSet<dotnetQuation> dotnetQuations { get; set; }

        public DbSet<adoDotnetQuation> adoDotnetQuations { get; set; }

        public DbSet<aspDotnetQuation> aspDotnetQuations { get; set; }

        public DbSet<c_Quation> c_Quations { get; set; }

        public DbSet<javaQuation> javaQuations { get; set; }


        public DbSet<mvcDotnetQuation> mvcDotnetQuations { get; set; }

        public DbSet<sqlQuation> sqlQuations { get; set; }

        public DbSet<webAppDotnetQuation> webAppDotnetQuations { get; set; }


    }
}
