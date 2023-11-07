import Account from "../models/account.js"
import { GroupTransaction } from "../types/GroupTransaction.js"

const elementExtract: HTMLElement = document.querySelector(".extrato .registro-transacoes")
const account = new Account()

const renderExtract = (): void => {
  const allGroupTransactions: GroupTransaction[] = account.listGroupTransactions()
  elementExtract.innerHTML = ""
  let htmlTransaction: string = ""


  for (let groupTransaction of allGroupTransactions){}
}
