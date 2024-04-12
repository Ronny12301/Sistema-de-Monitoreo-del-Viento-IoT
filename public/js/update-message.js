const UNITS = {
    M: "m/s",
    N: "Nudos",
    P: "mph",
    K: "km/h",
    F: "ft/min",
}

const STATUS = {
    "00": "OK",
    "01": "Muestras insuficientes en el eje U",
    "02": "Muestras insuficientes en el eje V",
    "04": "Muestras insuficientes en ambos ejes",
    "08": "Error de NVM",
    "09": "Error de ROM",
    "10": "Ganancia del sistema al máximo",
    // "A": "Datos válidos",       // NMEA
    // "V": "Datos inválidos",     // NMEA
}

function setStatusColour(status) {
    if (status === "00" || status === "A") {
        document.querySelector('#status').classList.add('text-green-600', 'dark:text-green-400');
        document.querySelector('#status').classList.remove('text-red-600', 'dark:text-red-400');
    }
    else {
        document.querySelector('#status').classList.add('text-red-600', 'dark:text-red-400');
        document.querySelector('#status').classList.remove('text-green-600', 'dark:text-green-400');
    }
}


function updateMessage() {
    fetch('/data')
        .then(response => response.json())
        .then(message => {
            try {
                const windData = splitString(message.string);
                document.querySelector('#raw-string').textContent = message.string;

                document.querySelector('#node-address').textContent = windData.nodeAddress;
                document.querySelector('#wind-direction').textContent = windData.windDirection + "°";
                document.querySelector('#wind-speed').textContent = `${parseFloat(windData.windSpeed)} ${UNITS[windData.units]}`;
                document.querySelector('#status').textContent = windData.status;
                document.querySelector('#checksum').textContent = windData.checksum;

                document.getElementById("status").setAttribute("data-tooltip", STATUS[windData.status] ?? "Indefinido");
                setStatusColour(windData.status);
            } catch (e) {
                console.error("Formato inválido:", e.message);
            }
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
