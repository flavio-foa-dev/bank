export enum FormatterDate {
  PADRAO = "DD/MM/YYYY",
  DAY_WEEK_DAY_MES_YEAR = "DAY_WEEK, DD/MM/YYYY",
  DAY_MES = "DD/MM"
}

export const formatcurrencies = (value: number): string => {

  return value.toLocaleString("pt-br", {style: "currency", currency:"BRL"})

}



export const formatDate = (value: Date, format: FormatterDate = FormatterDate.PADRAO): string => {
  if (format === FormatterDate.DAY_WEEK_DAY_MES_YEAR) {
    return value.toLocaleDateString("pt-br",
      {
        weekday: "long",
        day: "2-digit",
        month:"2-digit",
        year: "numeric"
      }
    )
  }
  else if (format === FormatterDate.DAY_MES) {
    return value.toLocaleDateString("pt-br",
      {
        weekday: "long",
        day: "2-digit",
        month:"2-digit",
        year: "numeric"
      }
    )
  }
  else {
    return value.toLocaleDateString("pt-br")
  }
}