using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QAppAPI.Models
{
    public class ReactQuation
    {
        [Key]
        public int QNumber { get; set; }

        public string QName { get; set; }
    }
}
