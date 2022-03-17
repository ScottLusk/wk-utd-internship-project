using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using UTD.Externship.BudgetCalculator.Data.Enums;

namespace UTD.Externship.BudgetCalculator.Api.Models
{
    public class TransactionLean
    {
        public string TransactionDate { get; set; }
        public string Description { get; set; }
        public decimal Amount { get; set; }

        [JsonIgnore]
        public TransactionType TransactionType { get; set; }

        [JsonIgnore]
        public decimal SignedAmount => TransactionType == TransactionType.Credit ? Amount : -Amount;


        public string FormattedAmount => TransactionType == TransactionType.Credit
                                         ? Amount.ToString("C", CultureInfo.CurrentCulture)
                                         : Amount.ToString("C9", CultureInfo.CurrentCulture);

    }
}
