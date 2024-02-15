using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QAppAPI.Data;

namespace QAppAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QAppController : Controller
    {
        private readonly QAppDbContext _qAppDbContext;

        public QAppController(QAppDbContext qAppDbContext)
        {
            _qAppDbContext = qAppDbContext;
        }

        [HttpGet("ReactQuations")]
        public async Task<IActionResult> GetAllReacts()
        {
            var React = await _qAppDbContext.reactQuations.ToListAsync();
            return Ok(React);

        }

        [HttpGet("JsQuations")]
        public async Task<IActionResult> GetAllJs()
        {
            var React = await _qAppDbContext.jsQuations.ToListAsync();
            return Ok(React);

        }


        [HttpGet("DotNetQuations")]
        public async Task<IActionResult> GetAllDotNet()
        {
            var React = await _qAppDbContext.dotnetQuations.ToListAsync();
            return Ok(React);

        }

        [HttpGet("AdoQuations")]
        public async Task<IActionResult> GetAllAdo()
        {
            var React = await _qAppDbContext.adoDotnetQuations.ToListAsync();
            return Ok(React);

        }

        [HttpGet("aspQuations")]
        public async Task<IActionResult> GetAllAsp()
        {
            var React = await _qAppDbContext.aspDotnetQuations.ToListAsync();
            return Ok(React);

        }



        [HttpGet("c_Quations")]
        public async Task<IActionResult> GetAllC_()
        {
            var React = await _qAppDbContext.c_Quations.ToListAsync();
            return Ok(React);

        }



        [HttpGet("javaQuations")]
        public async Task<IActionResult> GetAlljava()
        {
            var React = await _qAppDbContext.javaQuations.ToListAsync();
            return Ok(React);

        }


        [HttpGet("mvcQuations")]
        public async Task<IActionResult> GetAllmvc()
        {
            var React = await _qAppDbContext.mvcDotnetQuations.ToListAsync();
            return Ok(React);

        }


        [HttpGet("sqlQuations")]
        public async Task<IActionResult> GetAllsql()
        {
            var React = await _qAppDbContext.sqlQuations.ToListAsync();
            return Ok(React);

        }



        [HttpGet("apiQuations")]
        public async Task<IActionResult> GetAllapi()
        {
            var React = await _qAppDbContext.webAppDotnetQuations.ToListAsync();
            return Ok(React);

        }
    }
}
