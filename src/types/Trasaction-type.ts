export type TrasectionType = {
  type: TypeOpetation,
  value: number,
  date: Date
}

export enum TypeOpetation {
  DEPOSITO = "Deposito",
  TRANSFERENCIA = "Transferencia",
  PAGAMENTO_BOLETO = "Pagamento de Boleto"
}