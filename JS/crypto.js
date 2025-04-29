let criptomonedas = ["Bitcoin", "Ethereum", "USDT"]
let operaciones = ["Compra", "Venta"]

let operacionCripto = JSON.parse(localStorage.getItem("operacion")) || {}

let doc_moneda = document.getElementById("moneda")
let doc_operacion = document.getElementById("operacion")
let doc_monto = document.getElementById("monto")
let botonAceptar = document.getElementById("AceptarCompra")
let historialDiv = document.getElementById("historial")

// Renderizar selects ya definidos en HTML, solo se enlazan eventos
doc_moneda.addEventListener("change", () => {
    operacionCripto.moneda = criptomonedas[doc_moneda.value - 1]
})

doc_operacion.addEventListener("change", () => {
    operacionCripto.operacion = operaciones[doc_operacion.value - 1]
})

doc_monto.addEventListener("input", () => {
    let montoIngresado = parseFloat(doc_monto.value)
    operacionCripto.monto = isNaN(montoIngresado) || montoIngresado <= 0 ? null : montoIngresado
})

botonAceptar.addEventListener("click", () => {
    if (!operacionCripto.moneda || !operacionCripto.operacion || !operacionCripto.monto) {
        alert("Por favor, complete todos los campos correctamente.")
        return
    }

    mostrarResumenOperacion(operacionCripto)
    guardarOperacion(operacionCripto)
})

function mostrarResumenOperacion(operacion) {
    historialDiv.innerHTML = `
        <p><strong>Resumen:</strong></p>
        <p>Realizaste una <strong>${operacion.operacion}</strong> de 
        <strong>${operacion.monto} USD</strong> en <strong>${operacion.moneda}</strong>.</p>
    `
}

function guardarOperacion(operacion) {
    let historial = JSON.parse(localStorage.getItem("historialOperaciones")) || []
    historial.push(operacion)
    localStorage.setItem("historialOperaciones", JSON.stringify(historial))
    localStorage.setItem("operacion", JSON.stringify(operacion)) // también actualiza la operación actual
}
