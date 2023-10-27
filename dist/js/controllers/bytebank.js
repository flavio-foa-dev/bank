import { getBalance, updateBalance } from "../services/account.js";
const elementForm = document.querySelector(".block-nova-transacao form");
elementForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!elementForm.checkValidity()) {
        alert("Please complete all fields");
        return;
    }
    const inputTipoTransacao = (elementForm.querySelector("#tipoTransacao").value);
    const inputValor = +elementForm.querySelector("#valor").value;
    const inputData = new Date(elementForm.querySelector("#data").value);
    let balance = getBalance();
    updateBalance(balance);
    const novaTransacao = {
        type: inputTipoTransacao,
        value: inputValor,
        date: inputData
    };
    console.log(novaTransacao);
    console.log(balance);
    elementForm.reset();
});
