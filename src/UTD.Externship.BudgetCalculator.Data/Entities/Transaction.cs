using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UTD.Externship.BudgetCalculator.Data.Enums;

namespace UTD.Externship.BudgetCalculator.Data.Entities
{
    [Table("transaction")]
    public class Transaction
    {
        public int Id { get; set; }
        public int AccountId { get; set; }
        public TransactionType Type { get; set; }
        public DateTime TransactionDate { get; set; }
        public decimal Amount { get; set; }
        public string Description { get; set; }

        [ForeignKey(nameof(AccountId))]
        public virtual Account UserAccount { get; set; }
    }
}
