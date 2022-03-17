export class Transaction{
    id: number
    accountId: number
    type: number //credit 0, debit 1
    transactionDate: string
    amount: number
    description: string
    categoryId: number
}
