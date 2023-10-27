import { TypeOpetation } from "../types/Trasaction-type.js";
export default class Account {
    balance = 5000;
    getBalance() {
        return this.balance;
    }
    getDateAccess() {
        return new Date();
    }
    createTransaction(transaction) {
        if (transaction.type == TypeOpetation.DEPOSITO) {
            this.balance += transaction.value;
        }
        else if (transaction.type == TypeOpetation.TRANSFERENCIA || transaction.type == TypeOpetation.PAGAMENTO_BOLETO) {
            this.balance -= transaction.value;
        }
        else {
            alert("Tipo de Transação é inválido!");
            return;
        }
        console.log(this.balance, "novo valor");
        console.log(transaction);
    }
}
