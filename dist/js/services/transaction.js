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
    if (elementBalance !== null) {
        elementBalance.innerHTML = formatcurrencies(saldo);
    }
};
showBalance();
export const saveTransaction = async (transaction) => {
    account.createTransaction(transaction);
    account.listGroupTransactions();
    showBalance();
    location.reload();
};
