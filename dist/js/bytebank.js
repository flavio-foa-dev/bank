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
    if (inputTipoTransacao == TypeOpetation.DEPOSITO) {
        balance += Number(inputValor);
    }
    else if (inputTipoTransacao == TypeOpetation.TRANSFERENCIA || inputTipoTransacao == TypeOpetation.PAGAMENTO_BOLETO) {
        balance -= Number(inputValor);
    }
    else {
        alert("Tipo de Transação é inválido!");
        return;
    }
    elementBalance.innerHTML = formatcurrencies(balance);
    const novaTransacao = {
        type: inputTipoTransacao,
        value: inputValor,
        date: inputData
    };
    console.log(novaTransacao);
    console.log(balance);
    elementForm.reset();
});
