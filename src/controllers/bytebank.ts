import { saveTransaction } from "../services/transaction.js"
import { TrasectionType, TypeOpetation } from "../types/Trasaction-type.js"

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

    const novaTransacao: TrasectionType = {
      type: inputTipoTransacao,
      value: inputValor,
      date: inputData
    }

    saveTransaction(novaTransacao)
    elementForm.reset();

})

