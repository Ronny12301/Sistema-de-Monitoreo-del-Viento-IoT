const UNITS = {
    M: "m/s",
    N: "Nudos",
    P: "mph",
    K: "km/h",
    F: "ft/m",
}

const STATUS = {
    "00": "OK",
    "01": "Muestras insuficientes en el eje U",
    "02": "Muestras insuficientes en el eje V",
    "04": "Muestras insuficientes en ambos ejes",
    "08": "Error de NVM",
    "09": "Error de ROM",
    "10": "Ganancia del sistema al máximo",
    "A": "Datos válidos",       // NMEA
    "V": "Datos inválidos",     // NMEA
}


function updateMessage() {
    fetch('/data')
        .then(response => response.text())
        .then(message => {
            console.log(splitString(message));
            windData = splitString(message);
            document.querySelector('#raw-string').textContent = message;

            document.querySelector('#node-address').textContent = windData.nodeAddress;
            document.querySelector('#wind-direction').textContent = windData.windDirection;
            document.querySelector('#wind-speed').textContent = `${windData.windSpeed} ${UNITS[windData.units]}`;
            document.querySelector('#status').textContent = windData.status;
            document.querySelector('#checksum').textContent = windData.checksum;
        });
}
// Update the message every half seconds
setInterval(updateMessage, 500);

function splitString(rawData) {
    // Raw data example: "␂Q,136,000.49,M,00,␃17"
    const splitArray = rawData.split(',');

    const windData = {
        stx: splitArray[0][0],
        nodeAddress: splitArray[0][1],
        windDirection: splitArray[1],
        windSpeed: splitArray[2],
        units: splitArray[3],
        status: splitArray[4],
        etx: splitArray[5][0],
        checksum: splitArray[5][1] + splitArray[5][2] ?? "",
    };

    return windData;
}
