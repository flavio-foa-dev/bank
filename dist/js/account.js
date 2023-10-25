let balance = 4000;
const elementBalance = document.querySelector(".saldo-valor .valor");
const elementDate = document.querySelector(".block-saldo time");
elementBalance.innerHTML = balance.toLocaleString("pt-br", { currency: "BRL", style: "currency" });
if (elementDate) {
    const dateAccessor = new Date();
    elementDate.innerHTML = dateAccessor.toLocaleDateString("pt-br", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" });
}
