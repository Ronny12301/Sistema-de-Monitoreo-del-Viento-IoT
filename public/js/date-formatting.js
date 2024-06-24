function getISODate(date) {
    const d = new Date(date);

    let day = d.getDate();

    let month = d.getMonth() + 1;
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    const fullDate = `${d.getFullYear()}-${month}-${day}`;

    return fullDate;
}

function getUTCdate(date) {
    const dateObj = new Date(date);

    return dateObj.getUTCDate()
      + "/" + (dateObj.getUTCMonth() + 1)
      + "/" + dateObj.getUTCFullYear();
}