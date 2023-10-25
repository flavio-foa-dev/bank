let balance = 5000;

const elementBalance = document.querySelector(".saldo-valor .valor") as HTMLElement;
elementBalance.innerHTML = balance.toString()

const elementForm = document.querySelector(".block-nova-transacao form") as HTMLFormElement
elementForm.addEventListener("submit", (event) => {
  event.preventDefault()
  if(!elementForm.checkValidity()){
    alert("Please complete all fields")
    return
  }

  const inputTipoTransacao: string = (elementForm.querySelector("#tipoTransacao") as HTMLSelectElement).value ;
  const inputValor: number = +(elementForm.querySelector("#valor") as HTMLSelectElement).value;
  const inputData: Date = new Date((elementForm.querySelector("#data") as HTMLSelectElement).value);

  if (inputTipoTransacao == "Deposito") {
    balance += Number(inputValor);
  } else if (inputTipoTransacao == "Transferencia" || inputTipoTransacao == "Pagamento de Boleto") {
    balance -= Number(inputValor);
  } else {
    alert("Tipo de Transação é inválido!");
    return;
  }

  elementBalance.innerHTML = balance.toString()

  const novaTransacao = {
    tipoTransacao: inputTipoTransacao,
    valor: inputValor,
    data: inputData
  }

  console.log(novaTransacao);
  console.log(balance)
  elementForm.reset();
})