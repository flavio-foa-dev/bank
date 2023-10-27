import Account from "../models/account.js";
import { FormatterDate, formatDate, formatcurrencies } from "../utils/Formatters.js";
const account = new Account();
const elementBalance = document.querySelector(".saldo-valor .valor");
const elementDate = document.querySelector(".block-saldo time");
if (elementDate) {
    elementDate.innerHTML = formatDate(account.getDateAccess(), FormatterDate.DAY_WEEK_DAY_MES_YEAR);
}
export const showBalance = () => {
    const saldo = account.getBalance();
    console.log(saldo, "saldo atualizado");
    if (elementBalance !== null) {
        elementBalance.innerHTML = formatcurrencies(saldo);
    }
};
showBalance();
export const saveTransaction = async (transaction) => {
    console.log(transaction);
    account.createTransaction(transaction);
    showBalance();
};
