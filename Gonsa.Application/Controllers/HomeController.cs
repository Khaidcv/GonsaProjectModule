using Microsoft.AspNetCore.Mvc;

namespace Gonsa.Application.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Test()
        {
            return View();
        }
        public IActionResult Error()
        {
            return View();
        }
    }
}
