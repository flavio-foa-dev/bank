



const elementForm = document.querySelector(".block-nova-transacao form") as HTMLFormElement
elementForm.addEventListener("submit", (event) => {
  event.preventDefault()
  if(!elementForm.checkValidity()){
    alert("Please complete all fields")
    return
  }

  const inputTipoTransacao: TypeOpetation = ((elementForm.querySelector("#tipoTransacao") as HTMLSelectElement).value) as TypeOpetation ;
  const inputValor: number = +(elementForm.querySelector("#valor") as HTMLSelectElement).value;
  const inputData: Date = new Date((elementForm.querySelector("#data") as HTMLSelectElement).value);

  if (inputTipoTransacao == TypeOpetation.DEPOSITO) {
    balance += Number(inputValor);
  } else if (inputTipoTransacao == TypeOpetation.TRANSFERENCIA|| inputTipoTransacao == TypeOpetation.PAGAMENTO_BOLETO) {
    balance -= Number(inputValor);
  } else {
    alert("Tipo de Transação é inválido!");
    return;
  }

  elementBalance.innerHTML = balance.toLocaleString("pt-br", {currency: "BRL", style: "currency"})

  const novaTransacao: TrasectionType = {
    type: inputTipoTransacao,
    value: inputValor,
    date: inputData
  }

  console.log(novaTransacao);
  console.log(balance)
  elementForm.reset();
})