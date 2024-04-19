function getTimeFromDate(date) {
    const d = new Date(date);
    let minutes = d.getMinutes();

    let hours = d.getHours();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutes}`;
}

function getDayMonthYear(date) {
    const d = new Date(date);

    const fullDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

    return fullDate;
}

/** 
 * fullcalendar get local date instead of utc
*/
function formatDate(date) {
    const d = new Date(date);
    const offset = new Date().getTimezoneOffset();

    let day = d.getDate();
    day = offset>0 ? day+1 : day;

    let month = d.getMonth() + 1;
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    const fullDate = `${d.getFullYear()}-${month}-${day}`;

    return fullDate;
}

function getISODate(date) {
    const d = new Date(date);

    let day = d.getDate();

    let month = d.getMonth() + 1;
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    const fullDate = `${d.getFullYear()}-${month}-${day}`;

    return fullDate;
}