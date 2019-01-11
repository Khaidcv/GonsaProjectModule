using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Gonsa.Application.Models.Account.ViewModel
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Tên đăng nhập bắt buộc nhập")]
        [DataType(DataType.Text)]
        [RegularExpression(@"^[a-zA-Z\w\-. ]+$", ErrorMessage = "Use letters only please")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Mật khẩu bắt buộc nhập")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "Remember me?")]
        public bool RememberMe { get; set; }
    }
}
