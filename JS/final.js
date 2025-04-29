let operacion = JSON.parse(localStorage.getItem("operacion"))

let infoOperacion = document.getElementById("infoOperacion")

if (operacion) {
    infoOperacion.innerHTML = `
        <p>Tipo de operación: <strong>${operacion.operacion}</strong></p>
        <p>Criptomoneda: <strong>${operacion.moneda}</strong></p>
        <p>Monto ingresado: <strong>${operacion.monto} USD</strong></p>
    `
} else {
    infoOperacion.innerHTML = `<p>No se encontraron datos de la operación.</p>`
}
