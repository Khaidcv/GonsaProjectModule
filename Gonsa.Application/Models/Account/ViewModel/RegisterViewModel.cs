using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Gonsa.Application.Models.Account.ViewModel
{



    public class RegisterViewModel
    {
        [Required(ErrorMessage = "Họ bắt buộc nhập")]
        [DataType(DataType.Text)]
        //[RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Chỉ được nhập ký tự")]
        [Display(Name = "Họ")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Tên đệm bắt buộc nhập")]
        [DataType(DataType.Text)]
        //[RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Chỉ được nhập ký tự")]
        [Display(Name = "Tên đệm")]
        public string MiddleName { get; set; }
        [Required(ErrorMessage ="Tên bắt buộc nhập")]
        [DataType(DataType.Text)]
        [Display(Name = "Tên")]
        public string LastName { get; set; }

        [Required]
        [Display(Name = "Position")]
        public string position;

        [Required(ErrorMessage = "Tên đăng nhập bắt buộc nhập")]
        [DataType(DataType.Text)]
        [RegularExpression(@"^[a-zA-Z0-9]+$", ErrorMessage = "Chỉ được nhập ký tự")]
        [StringLength(30, ErrorMessage = "Ký tự {0} phải ít nhất {2} và tối đa {1}.", MinimumLength = 6)]
        [Display(Name = "Tên đăng nhập")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Email bắt buộc nhập")]
        [EmailAddress(ErrorMessage ="Không đúng định dạng email")]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Mật khẩu bắt buộc nhập")]
        [StringLength(100, ErrorMessage = "Ký tự {0} phải ít nhất {2} và tối đa {1}.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Mật khẩu")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Xác nhận mật khẩu")]
        [Compare("Password", ErrorMessage = "Mật khẩu không không trùng khớp.")]
        public string ConfirmPassword { get; set; }
        [Required(ErrorMessage = "Vị trí/nhiệm vụ bắt buộc nhập")]
        [DataType(DataType.MultilineText)]
        [Display(Name = "Mô tả vị trí")]
        [MinLength(5, ErrorMessage = "Tối thiểu là 5 ký tự")]
        public string TaskInfo { get; set; }
    }
}
