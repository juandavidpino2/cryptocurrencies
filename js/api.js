class API {
    constructor(apikey) {
        this.apikey = apikey;
    }

    // Obtener todas las monedas
    async obtenerMonedasAPI() {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;


        // Fetch a la API
        const urlObtenerMonedas = await fetch(url);

        // Respuesta en JSON
        const monedas = await urlObtenerMonedas.json();


        return {
            monedas
        }
    }

    async obtenerValores(moneda, criptomoneda) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&apikey=${this.apikey}`;

        // Consultar en rest api
        const urlConvertir = await fetch(url);

        const resultado = await urlConvertir.json();

        return {
            resultado
        }

    }
}