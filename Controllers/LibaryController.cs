using epita_2025_core_api_001_students.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace epita_2025_core_api_001_students.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibraryController : ControllerBase
    {
        private readonly ILogger<StudentController> _logger;
        private readonly AppDbContext _context;

        public LibraryController(ILogger<StudentController> logger, AppDbContext context)
        {
            _logger = logger;
            _context = context;
        }
     

        [HttpGet]
        public IActionResult Get()
        {

            return Ok(GetLibrary());

        }

        [HttpPost]
        
        public async Task<IActionResult> Post([FromBody] Book book)
        {

            _context.Books.Add(book);
            await _context.SaveChangesAsync();
            return Ok(GetLibrary());
        }

        private List<Book> GetLibrary()
        {

            return _context.Books.ToList();
    //     
        }
    }
}
