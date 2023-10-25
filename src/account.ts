let balance = 4000;
const elementBalance = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementDate = document.querySelector(".block-saldo time") as HTMLElement;

elementBalance.innerHTML = balance.toLocaleString("pt-br", {currency: "BRL", style: "currency"})


if (elementDate) {
  const dateAccessor: Date = new Date()
  elementDate.innerHTML = dateAccessor.toLocaleDateString("pt-br", {weekday: "long", day: "2-digit", month: "2-digit", year: "numeric"})
}
