using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QAppAPI.Migrations
{
    /// <inheritdoc />
    public partial class alltables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "adoDotnetQuations",
                columns: table => new
                {
                    QNumber = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    QName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_adoDotnetQuations", x => x.QNumber);
                });

            migrationBuilder.CreateTable(
                name: "aspDotnetQuations",
                columns: table => new
                {
                    QNumber = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    QName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_aspDotnetQuations", x => x.QNumber);
                });

            migrationBuilder.CreateTable(
                name: "c_Quations",
                columns: table => new
                {
                    QNumber = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    QName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_c_Quations", x => x.QNumber);
                });

            migrationBuilder.CreateTable(
                name: "dotnetQuations",
                columns: table => new
                {
                    QNumber = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    QName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_dotnetQuations", x => x.QNumber);
                });

            migrationBuilder.CreateTable(
                name: "javaQuations",
                columns: table => new
                {
                    QNumber = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    QName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_javaQuations", x => x.QNumber);
                });

            migrationBuilder.CreateTable(
                name: "mvcDotnetQuations",
                columns: table => new
                {
                    QNumber = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    QName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_mvcDotnetQuations", x => x.QNumber);
                });

            migrationBuilder.CreateTable(
                name: "sqlQuations",
                columns: table => new
                {
                    QNumber = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    QName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_sqlQuations", x => x.QNumber);
                });

            migrationBuilder.CreateTable(
                name: "webAppDotnetQuations",
                columns: table => new
                {
                    QNumber = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    QName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_webAppDotnetQuations", x => x.QNumber);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "adoDotnetQuations");

            migrationBuilder.DropTable(
                name: "aspDotnetQuations");

            migrationBuilder.DropTable(
                name: "c_Quations");

            migrationBuilder.DropTable(
                name: "dotnetQuations");

            migrationBuilder.DropTable(
                name: "javaQuations");

            migrationBuilder.DropTable(
                name: "mvcDotnetQuations");

            migrationBuilder.DropTable(
                name: "sqlQuations");

            migrationBuilder.DropTable(
                name: "webAppDotnetQuations");
        }
    }
}
