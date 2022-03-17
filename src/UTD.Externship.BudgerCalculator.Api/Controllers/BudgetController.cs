using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;
using UTD.Externship.BudgetCalculator.Data;
using Microsoft.Extensions.Logging;
using UTD.Externship.BudgetCalculator.Api.Models;
using UTD.Externship.BudgetCalculator.Data.Entities;

namespace UTD.Externship.BudgerCalculator.Api.Controllers
{
    [Route("api")]
    [ApiController]
    public class BudgetController : ControllerBase
    {
        private readonly ILogger<BudgetController> _logger;
        private readonly AccountingContext _accountingContext;

        public BudgetController(ILogger<BudgetController> logger, AccountingContext accountingContext)
        {
            _logger = logger;
            _accountingContext = accountingContext;
        }


        [Route("account/details")]
        [HttpGet]
        public async Task<ActionResult<AccountDetails>> GetAccountDetails(string accountNumber)
        {
            var accountDetails = await (from account in _accountingContext.Accounts
                                        where account.AccountNumber == accountNumber
                                        join user in _accountingContext.Users
                                            on account.UserId equals user.Id
                                        select new AccountDetails()
                                        {
                                            AccountNumber = account.AccountNumber,
                                            UserFirstName = user.FirstName,
                                            UserLastName = user.LastName,
                                            UserMiddleName = user.MiddleName
                                        }).SingleOrDefaultAsync();

            if (accountDetails == null)
                return BadRequest($"Account : {accountNumber} doesn't exist");

            return Ok(accountDetails);
        }


        [Route("account/summary")]
        [HttpGet]
        public async Task<ActionResult<AccountSummary>> GetTransactionsByAccountNumber(string accountNumber)
        {

            var transactions = await (from account in _accountingContext.Accounts
                                      where account.AccountNumber == accountNumber
                                      join transaction in _accountingContext.Transactions
                                          on account.Id equals transaction.AccountId
                                      select new TransactionLean
                                      {
                                          TransactionDate = transaction.TransactionDate.ToString("d"),
                                          Description = transaction.Description,
                                          Amount = transaction.Amount,
                                          TransactionType = transaction.Type
                                      }).ToListAsync();

            if (!transactions.Any())
            {
                return Ok(new AccountSummary()
                {
                    Transactions = Array.Empty<TransactionLean>()
                });
            }

            return Ok(new AccountSummary()
            {
                Transactions = transactions,
                TotalBalance = transactions.Sum(item => item.SignedAmount)
            });
        }


        [Route("transaction/create")]
        [HttpPost]
        public async Task<ActionResult> PostTransaction([FromBody] PostedTransaction transaction)
        {
            var userAccount = await (from account in _accountingContext.Accounts
                                     where account.AccountNumber == transaction.AccountNumber
                                     select new
                                     {
                                         AccountId = account.Id,
                                         UserID = account.UserId
                                     }).SingleOrDefaultAsync();

            if (userAccount == null)
                return BadRequest($"Account : {transaction.AccountNumber} does not exist");

            var newTransaction = new Transaction
            {
                Type = transaction.Type,
                Amount = transaction.Amount,
                AccountId = userAccount.AccountId,
                Description = transaction.Description,
                TransactionDate = transaction.TransactionDate
            };

            await _accountingContext.Transactions.AddAsync(newTransaction);
            await _accountingContext.SaveChangesAsync();

            return NoContent();
        }

        [Route("user/create")]
        [HttpPost]
        public async Task<ActionResult> CreateUser([FromBody] NewUser user)
        {
            var newUser = new User
            {
                FirstName = user.FirstName,
                MiddleName = user.MiddleName,
                LastName = user.LastName
            };

            await _accountingContext.Users.AddAsync(newUser);
            await _accountingContext.SaveChangesAsync();

            return NoContent();
        }

        [Route("user/list")]
        [HttpGet]
        public async Task<ActionResult> GetUsers()
        {
            var users = await _accountingContext.Users.Select(user => new
            {
                UserId = user.Id,
                FirstName = user.FirstName,
                MiddleName = user.MiddleName,
                LastName = user.LastName
            }).ToListAsync();

            return Ok(users);
        }

        [Route("account/create")]
        [HttpPost]
        public async Task<ActionResult> CreateUser([FromBody] NewAccount account)
        {
            var newAccount = new Account()
            {
               AccountNumber = account.AccountNumber,
               UserId = account.UserId
            };

            await _accountingContext.Accounts.AddAsync(newAccount);
            await _accountingContext.SaveChangesAsync();

            return NoContent();
        }

        [Route("account/list")]
        [HttpGet]
        public async Task<ActionResult> GetUserAccounts(int userId)
        {
            var userAccounts = await (from account in _accountingContext.Accounts
                                                where account.UserId == userId
                                                select new
                                                {
                                                    AccountNumber = account.AccountNumber
                                                }).ToListAsync();


            return Ok(userAccounts);
        }

    }
}
