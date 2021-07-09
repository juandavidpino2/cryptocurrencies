const cotizador = new API('42f68951e05bc2870a388dd0b540c573a154e63de3b36226e2e6a1e2883f26d4');
const ui = new Interfaz();


// Leer el formulario

const formulario = document.querySelector('#formulario');

// Evenlistener
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    // Leer la criptomoneda 
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    // Comprobar que ambos campos tengan algo seleccionado
    if (monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
        // Arrojar una alerta de error 
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');

    } else {
        // todo bien, consultar la api 
        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada).then(data => {
            ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
        })
    }
    console.log(monedaSeleccionada);
    console.log(criptoMonedaSeleccionada);
});