import { TrasectionType, TypeOpetation } from "../types/Trasaction-type"

export default class Account {
  private balance: number = 5000

  getBalance(): number {
    return this.balance
  }

  getDateAccess(): Date {
    return new Date()
  }

  createTransaction(transaction: TrasectionType): void {
    if (transaction.type == TypeOpetation.DEPOSITO) {
      this.balance += transaction.value
    } else if (transaction.type == TypeOpetation.TRANSFERENCIA|| transaction.type == TypeOpetation.PAGAMENTO_BOLETO) {
      this.balance -= transaction.value
    } else {
      alert("Tipo de Transação é inválido!");
      return;
    }
    console.log(transaction)

  }
}