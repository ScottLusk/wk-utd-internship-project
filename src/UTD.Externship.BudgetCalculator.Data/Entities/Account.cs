using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UTD.Externship.BudgetCalculator.Data.Entities
{
    [Table("account")]

    public class Account
    {
        public  int Id { get; set; }
        public string AccountNumber { get; set; }
        public int UserId { get; set; }

        [ForeignKey(nameof(UserId))]

        public virtual User User { get; set; }
    }
}
