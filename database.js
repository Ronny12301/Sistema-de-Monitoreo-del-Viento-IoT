const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

/**
 * Store the data in the messages schema
 * @param {Object} ms Object or JSON that has an email and the anemometer String
 */
async function storeMessage(ms) {
    if (ms.string === undefined) {
        return;
    }

    const windData = splitString(ms.string);

    await prisma.messages.create({
        data: {
            email: ms.email,
            stx: windData.stx,
            node_address: windData.nodeAddress,
            wind_direction: windData.windDirection,
            wind_speed: windData.windSpeed,
            units: windData.units,
            status: windData.status,
            etx: windData.etx,
            checksum: windData.checksum,
            raw_string: ms.string,
        },
    });
}

/**
 * Get all registries in the messages schema
 * @returns {Object} Every message stored
 */
async function getMessages() {
    try {
        const messages = await prisma.messages.findMany();
        console.log("messages: ", messages);
        const data = JSON.stringify({ data: messages }, bigIntReplacer);
        
        return JSON.parse(data);
    } 
    catch (error) {
        console.error("Error fetching messages:", error);
    }
}


const UNITS = {
    M: "m/s",
    N: "Nudos",
    P: "mph",
    K: "km/h",
    F: "ft/min",
}
function splitString(rawData) {
    // Raw data example: "␂Q,136,000.49,M,00,␃17"
    const splitArray = rawData.split(',');

    const windData = {
        stx: splitArray[0][0],
        nodeAddress: splitArray[0][1],
        windDirection: parseInt(splitArray[1]),
        windSpeed: parseFloat(splitArray[2]),
        units: UNITS[splitArray[3]],
        status: splitArray[4],
        etx: splitArray[5][0],
        checksum: splitArray[5][1] + (splitArray[5][2] ?? ""),
    };

    return windData;
}

function bigIntReplacer(key, value) {
    if (typeof value === "bigint") {
       return value.toString(); // Convert BigInt to a string representation
    }
    return value;
   }

module.exports = {
    storeMessage,
    getMessages
};