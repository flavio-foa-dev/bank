let balance = 4000;
const elementBalance = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementDate = document.querySelector(".block-saldo time") as HTMLElement;

elementBalance.innerHTML = formatcurrencies(balance)


if (elementDate) {
  const dateAccessor: Date = new Date()
  elementDate.innerHTML = formatDate(dateAccessor, FormatterDate.DAY_WEEK_DAY_MES_YEAR)
}
