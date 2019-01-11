using Gonsa.Application.Providers.ddl;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Gonsa.Application.Models.Account.ViewModel
{



    public class RegisterViewModel
    {
        [Required(ErrorMessage = "Tên đầy đủ bắt buộc nhập")]
        [DataType(DataType.Text)]
        //[RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        [Display(Name = "Full Name")]
        public string FullName { get; set; }

        [Required]
        [Display(Name = "Position")]
        public string position;

        [Required(ErrorMessage = "Tên đăng nhập bắt buộc nhập")]
        [DataType(DataType.Text)]
        [RegularExpression(@"^[a-zA-Z\w\-. ]+$", ErrorMessage = "Use letters only please")]
        // [RegularExpression(@"^\S*$", ErrorMessage = "No white space allowed")]
        [Display(Name = "User Name")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Email bắt buộc nhập")]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Mật khẩu bắt buộc nhập")]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }
        [Required(ErrorMessage = "Vị trí/nhiệm vụ bắt buộc nhập")]
        [DataType(DataType.MultilineText)]
        [Display(Name = "Task Info")]
        [MinLength(5, ErrorMessage = "The min lenght is 5")]
        public string TaskInfo { get; set; }
    }
}
