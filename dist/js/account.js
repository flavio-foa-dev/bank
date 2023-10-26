let balance = 4000;
const elementBalance = document.querySelector(".saldo-valor .valor");
const elementDate = document.querySelector(".block-saldo time");
elementBalance.innerHTML = formatcurrencies(balance);
if (elementDate) {
    const dateAccessor = new Date();
    elementDate.innerHTML = formatDate(dateAccessor, FormatterDate.DAY_WEEK_DAY_MES_YEAR);
}
