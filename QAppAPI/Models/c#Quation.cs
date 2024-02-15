using System.ComponentModel.DataAnnotations;

namespace QAppAPI.Models
{
    public class c_Quation
    {
        [Key]
        public int QNumber { get; set; }

        public string QName { get; set; }
    }
}
