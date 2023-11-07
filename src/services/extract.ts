import Account from "../models/account.js"
import { GroupTransaction } from "../types/GroupTransaction.js"
import { FormatterDate, formatDate, formatcurrencies } from "../utils/Formatters.js"

const elementExtract: HTMLElement = document.querySelector(".extrato .registro-transacoes")
const account = new Account()

const renderExtract = (): void => {
  const allGroupTransactions: GroupTransaction[] = account.listGroupTransactions()
  elementExtract.innerHTML = ""
  let htmlTransactions: string = ""

  for (let groupTransaction of allGroupTransactions){
    let htmlTransacaoItem: string = ''

    for (let transaction of groupTransaction.transactions){
      htmlTransacaoItem += `
        <div class="transacao-item">
          <div class="transacao-info">
            <span class="tipo">${transaction.type}</span>
            <strong class="valor">${formatcurrencies(transaction.value)}</strong>
          </div>
            <time class="data">${formatDate(transaction.date, FormatterDate.DAY_MES)}</time>
        </div>
      `;
    }
    htmlTransactions += `
    <div class="transacoes-group">
    <strong class="mes-group">${groupTransaction.label}</strong>
    ${htmlTransacaoItem}
    <div>
    `;
  }

  if(htmlTransactions === "") {
    htmlTransactions = `<div>Nao ha Registros para listar</div>`

  }
  elementExtract.innerHTML = htmlTransactions
}
renderExtract()



export const ExtratoComponente = {
  atualizar():void {
    renderExtract()
  }
}