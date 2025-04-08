function seleccionar_criptomoneda(opcion_moneda) {
    switch(opcion_moneda) {
        case 1:
            opcion_moneda = "Bitcoin"
            break
        case 2:
            opcion_moneda = "Ethereum"
            break
        case 3:
            opcion_moneda = "USDT"
            break
    }
    return opcion_moneda
}

function tipo_operacion(opcion_operacion) {
    switch(opcion_operacion) {
        case 1:
            opcion_operacion = "Compra"
            break
        case 2:
            opcion_operacion = "Venta"
            break
    }
    return opcion_operacion
}

function monto_operado(monto) {
    return monto
}

function mostrar_operacion(moneda, operacion, monto) {
    console.log("Usted realizó una " + operacion + " de " + monto + " USD en " + moneda)
}

let historialOperaciones = []
let continuidad = true

while (continuidad == true) {
    let menu = parseInt(prompt(
        "Bienvenido al simulador de criptomonedas!\n" +
        "Seleccione una opción:\n" +
        "1. Operar criptomonedas\n" +
        "2. Salir"
    ))

    switch (menu) {
        case 1:
            let opcion_moneda = parseInt(prompt(
                "¿Qué criptomoneda desea operar?\n" +
                "1. Bitcoin\n" +
                "2. Ethereum\n" +
                "3. USDT"
            ))
            let moneda = seleccionar_criptomoneda(opcion_moneda)

            let opcion_operacion = parseInt(prompt(
                "¿Qué operación desea realizar?\n" +
                "1. Comprar\n" +
                "2. Vender"
            ))
            let operacion = tipo_operacion(opcion_operacion)

            let monto = parseFloat(prompt("Ingrese el monto en USD:"))

            if (isNaN(monto) || monto <= 0) {
                alert("Monto inválido. Intente nuevamente.")
            } else {
                mostrar_operacion(moneda, operacion, monto)

                // Guardar operación en el historial
                historialOperaciones.push({
                    moneda: moneda,
                    operacion: operacion,
                    monto: monto
                })
            }
            break

        case 2:
            continuidad = false
            break

        default:
            alert("Opción no válida.")
    }
}

// Mostrar resumen de operaciones al salir
if (historialOperaciones.length > 0) {
    console.log("=== RESUMEN DE OPERACIONES ===")
    historialOperaciones.forEach(function(op, index) {
        console.log((index + 1) + ". " + op.operacion + " de " + op.monto + " USD en " + op.moneda)
    })
    alert("Gracias por usar el simulador. Revisa la consola para ver el resumen.")
} else {
    alert("No se registraron operaciones.")
}


