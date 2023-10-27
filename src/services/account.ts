import { FormatterDate, formatDate, formatcurrencies } from "../utils/Formatters.js";

let balance = 3000;
const elementBalance = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementDate = document.querySelector(".block-saldo time") as HTMLElement;




if (elementDate) {
  const dateAccessor: Date = new Date()
  elementDate.innerHTML = formatDate(dateAccessor, FormatterDate.DAY_WEEK_DAY_MES_YEAR)
}

export const getBalance = () => {
  return balance
}

export const updateBalance = (newBalance: number) => {
  balance = newBalance
  if(elementBalance !== null) {
    elementBalance.innerHTML = formatcurrencies(balance)
  }
}
updateBalance(balance)