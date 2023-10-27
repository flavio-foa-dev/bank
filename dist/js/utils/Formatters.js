export var FormatterDate;
(function (FormatterDate) {
    FormatterDate["PADRAO"] = "DD/MM/YYYY";
    FormatterDate["DAY_WEEK_DAY_MES_YEAR"] = "DAY_WEEK, DD/MM/YYYY";
    FormatterDate["DAY_MES"] = "DD/MM";
})(FormatterDate || (FormatterDate = {}));
export const formatcurrencies = (value) => {
    return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};
export const formatDate = (value, format = FormatterDate.PADRAO) => {
    if (format === FormatterDate.DAY_WEEK_DAY_MES_YEAR) {
        return value.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }
    else if (format === FormatterDate.DAY_MES) {
        return value.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }
    else {
        return value.toLocaleDateString("pt-br");
    }
};
