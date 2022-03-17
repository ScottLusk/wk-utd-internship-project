using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UTD.Externship.BudgetCalculator.Data.Enums;

namespace UTD.Externship.BudgetCalculator.Api.Models
{
    public class PostedTransaction
    {
        public string AccountNumber { get; set; }
        public DateTime TransactionDate { get; set; }
        public TransactionType Type { get; set; }
        public decimal Amount { get; set; }
        public string Description { get; set; }
    }
}
