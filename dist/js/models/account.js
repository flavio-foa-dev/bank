import { TypeOpetation } from "../types/Trasaction-type.js";
export default class Account {
    balance = JSON.parse(localStorage.getItem('balance')) || 0;
    transactionAll = JSON.parse(localStorage.getItem("transactions"), (key, value) => {
        if (key === "date") {
            return new Date(value);
        }
        return value;
    }) || [];
    getBalance() {
        return this.balance;
    }
    getDateAccess() {
        return new Date();
    }
    depositAccount(value) {
        this.balance += value;
        localStorage.setItem("balance", this.balance.toString());
    }
    debitAccount(value) {
        if (this.balance < value) {
            throw new Error("insufficient funds to transaction");
        }
        this.balance -= value;
        localStorage.setItem("balance", this.balance.toString());
    }
    createTransaction(transaction) {
        if (transaction.type == TypeOpetation.DEPOSITO) {
            this.depositAccount(transaction.value);
        }
        else if (transaction.type == TypeOpetation.TRANSFERENCIA || transaction.type == TypeOpetation.PAGAMENTO_BOLETO) {
            this.debitAccount(transaction.value);
            transaction.value *= -1;
        }
        else {
            throw new Error("Tipo de Transação é inválido!");
        }
        this.transactionAll.push(transaction);
        localStorage.setItem("transactions", JSON.stringify(this.transactionAll));
        console.log(this.transactionAll);
    }
    listGroupTransactions() {
        const groupTransaction = [];
        console.log("Todos os grupos de transacoes", groupTransaction);
        const allTransactions = structuredClone(this.transactionAll);
        console.log("pega todas as transacoes salvas ", allTransactions);
        const ordenaTransactions = allTransactions.sort((a, b) => a.date.getTime() - b.date.getTime());
        console.log("ordena as transacoes por data", ordenaTransactions);
        let createLabelGroupAtual = "";
        for (let transaction of ordenaTransactions) {
            let labelGroupTransaction = transaction.date.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
            if (createLabelGroupAtual !== labelGroupTransaction) {
                createLabelGroupAtual = labelGroupTransaction;
                groupTransaction.push({
                    label: labelGroupTransaction,
                    transactions: []
                });
            }
            groupTransaction.at(-1).transactions.push(transaction);
        }
        return groupTransaction;
    }
}
