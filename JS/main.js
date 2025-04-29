let criptomonedas = ["Bitcoin", "Ethereum", "Ripple", "Litecoin", "Cardano"];
let compraCripto = {};
let lista_imagenes = [
    "fotos/bitcoin.jpg", 
    "fotos/ethereum.jpg", 
    "fotos/ripple.jpg", 
    "fotos/litecoin.jpg", 
    "fotos/cardano.jpg"
];

const cryptos_container = document.getElementById("cryptos");

function renderCryptos(array_cripto, fotos) {
    let i = 0;
    array_cripto.forEach(cripto => {
        let verCripto = document.createElement("div");
        verCripto.innerHTML = `
            <img src="${fotos[i]}" alt="${cripto}">
            <a href="comprar.html" class="crypto" id="${cripto}">${cripto}</a>
        `;
        cryptos_container.appendChild(verCripto);
        i++;
    });

    devolucionLink();
}

renderCryptos(criptomonedas, lista_imagenes);

function devolucionLink() {
    const addCripto = document.querySelectorAll(".crypto");
    addCripto.forEach(cripto => {
        cripto.onclick = (e) => {
            let cripto_ID = e.currentTarget.id;
            let cripto_seleccionado = criptomonedas.find(nombre => nombre === cripto_ID);
            compraCripto.Cripto = `${cripto_seleccionado}`;
            console.log(compraCripto);
            localStorage.setItem("compra", JSON.stringify(compraCripto));
        }
    });
}
