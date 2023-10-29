
import { GroupTransaction } from "../types/GroupTransaction.js"
import { TrasectionType, TypeOpetation } from "../types/Trasaction-type.js"

export default class Account {
  private balance: number = JSON.parse(localStorage.getItem('balance')) || 0
  private transactionAll: TrasectionType[] = JSON.parse(localStorage.getItem("transactions"),
  (key: string, value: string) => {
    if (key === "date") {
      return new Date(value)
    }
    return value
  }) || []

  getBalance(): number {
    return this.balance
  }

  getDateAccess(): Date {
    return new Date()
  }

  private depositAccount(value: number): void {
    this.balance += value
    localStorage.setItem("balance", this.balance.toString())
  }

  private debitAccount(value: number): void {
    if (this.balance < value ){
      throw new Error("insufficient funds to transaction")
    }
    this.balance -= value
    localStorage.setItem("balance", this.balance.toString())

  }

  createTransaction(transaction: TrasectionType): void {
    if (transaction.type == TypeOpetation.DEPOSITO) {
      this.depositAccount(transaction.value)
    } else if (transaction.type == TypeOpetation.TRANSFERENCIA|| transaction.type == TypeOpetation.PAGAMENTO_BOLETO) {
      this.debitAccount(transaction.value)
    } else {
      throw new Error("Tipo de Transação é inválido!");
    }
    this.transactionAll.push(transaction)
    localStorage.setItem("transactions", JSON.stringify(this.transactionAll))
    console.log(this.transactionAll)
  }

  listGroupTransactions(): GroupTransaction[] {
    const groupTransaction: GroupTransaction [] = []
    console.log("Todos os grupos de transacoes",groupTransaction)
    const allTransactions: TrasectionType [] = structuredClone(this.transactionAll)
    console.log("pega todas as transacoes salvas ", allTransactions)
    const ordenaTransactions: TrasectionType[] = allTransactions.sort((a, b) => a.date.getTime() - b.date.getTime())
    console.log("ordena as transacoes por data",ordenaTransactions)

    let createLabelGroupAtual: string = ""

    for (let transaction of ordenaTransactions) {
      let labelGroupTransaction: string = transaction.date.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
      if (createLabelGroupAtual !== labelGroupTransaction){
        createLabelGroupAtual = labelGroupTransaction
        groupTransaction.push({
          label:labelGroupTransaction,
          transactions: []

        })
      }
      groupTransaction.at(-1).transactions.push(transaction)
    }
    return groupTransaction
  }
}

