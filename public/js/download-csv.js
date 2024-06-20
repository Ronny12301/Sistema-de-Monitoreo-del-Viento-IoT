function downloadCSV(data, filename = "datos del viento") {
    let csvContent = 'ID,Nodo,Dirección,Velocidad,Unidades,Estado,Checksum,String sin procesar,Fecha,Hora \n';
    const headers = Object.keys(data[0]);

    for (let i = 0; i < data.length - 3; i++) {
        const row = data[i];
        const values = [];
        for (let j = 0; j < headers.length; j++) {
            const header = headers[j];
            if (header === 'created_at') {
                values.push(new Date(row[header]).toLocaleString());
            } else if (header === 'stx' || header === 'etx' || header === 'email') {
                continue;
            } else {
                values.push(`"${row[header]}"`);
            }
        }
        csvContent += values.join(',') + '\n';
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename + ".csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}