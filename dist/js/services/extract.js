import Account from "../models/account";
const elementExtract = document.querySelector(".extrato .registro-transacoes");
const account = new Account();
const renderExtract = () => {
    const allGroupTransactions = account.listGroupTransactions();
    elementExtract.innerHTML = "";
    let htmlTransaction = "";
    for (let groupTransaction of allGroupTransactions) { }
};
