using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace UTD.Externship.BudgetCalculator.Api.Models
{
    public class AccountDetails
    {
        public string AccountNumber { get; set; }
        [JsonIgnore]
        public string UserFirstName { get; set; }
        [JsonIgnore]
        public string UserMiddleName { get; set; }
        [JsonIgnore]
        public string UserLastName { get; set; }

        public string UserFullName => $"{UserLastName},{UserMiddleName} {UserFirstName}";
    }
}
