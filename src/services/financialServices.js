
function checkTypeAndValue(value, type) {
    if (!value || !type) {
        throw { type: "Unprocessable Entity" }
    }

    const financialTypes = ["INCOME", "OUTCOME"];
    if (!financialTypes.includes(type)) {
        throw { type: "Unprocessable Entity" }
    }

    if (value < 0) {
        throw { type: "Unprocessable Entity" }
    }

}

function sumTransactions(events) {
    const sum = events.rows.reduce(
        (total, event) =>
            event.type === "INCOME" ? total + event.value : total - event.value,
        0
    );

    return sum
}


export default { checkTypeAndValue, sumTransactions }