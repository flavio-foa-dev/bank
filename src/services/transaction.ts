import Account from "../models/account.js";
import { TrasectionType } from "../types/Trasaction-type.js";
import { FormatterDate, formatDate, formatcurrencies } from "../utils/Formatters.js";
const account = new Account()

const elementBalance = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementDate = document.querySelector(".block-saldo time") as HTMLElement;

if (elementDate) {
  elementDate.innerHTML = formatDate(account.getDateAccess(), FormatterDate.DAY_WEEK_DAY_MES_YEAR)
}

export const showBalance = (): void => {
  const saldo = account.getBalance()
  if(elementBalance !== null) {
    elementBalance.innerHTML = formatcurrencies(saldo)
  }
}
showBalance()

export const saveTransaction = async(transaction: TrasectionType) => {
  console.log(transaction)
  account.createTransaction(transaction)
  showBalance()
}
