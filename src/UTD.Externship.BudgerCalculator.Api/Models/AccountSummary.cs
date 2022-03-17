using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace UTD.Externship.BudgetCalculator.Api.Models
{
    public class AccountSummary
    {
        public ICollection<TransactionLean> Transactions { get; set; }

        [JsonIgnore]
        public decimal TotalBalance { get; set; }

        public string FormattedTotalBalance => TotalBalance > 0
                                               ? TotalBalance.ToString("C", CultureInfo.CurrentCulture)
                                               : TotalBalance.ToString("C9", CultureInfo.CurrentCulture);
    }
}
