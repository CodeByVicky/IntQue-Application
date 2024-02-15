using System.ComponentModel.DataAnnotations;

namespace QAppAPI.Models
{
    public class sqlQuation
    {
        [Key]
        public int QNumber { get; set; }

        public string QName { get; set; }
    }
}
