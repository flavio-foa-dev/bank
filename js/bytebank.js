let balance = 5000;

const elementBalance = document.querySelector(".saldo-valor .valor")
elementBalance.innerHTML = balance

const elementForm = document.querySelector(".block-nova-transacao form")
elementForm.addEventListener("submit", (event) => {
  event.preventDefault()
  if(!elementForm.checkValidity()){
    alert("Please complete all fields")
    return
  }

  const inputTipoTransacao = elementForm.querySelector("#tipoTransacao").value;
  const inputValor = elementForm.querySelector("#valor").value;
  const inputData = elementForm.querySelector("#data").value;

  if (inputTipoTransacao == "Deposito") {
    balance += Number(inputValor);
  } else if (inputTipoTransacao == "Transferencia" || inputTipoTransacao == "Pagamento de Boleto") {
    balance -= Number(inputValor);
  } else {
    alert("Tipo de Transação é inválido!");
    return;
  }

  elementBalance.innerHTML = balance

  const novaTransacao = {
    tipoTransacao: inputTipoTransacao,
    valor: inputValor,
    data: inputData
  }

  console.log(novaTransacao);
  console.log(balance)
  elementForm.reset();
})