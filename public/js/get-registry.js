

function parseToFullCalendar(messages) {
    let calendarEvents = [];
    messages.forEach(message => {
        const event = {
            title: `${message.wind_speed} ${message.units}, ${message.wind_direction}°`,
            start: message.created_at,
            url: "/day?created_at=" + getDate(message.created_at)
        }
        calendarEvents.push(event);
    });

    return calendarEvents;
}

async function getWindRegistry() {
    const response = await fetch('/registry');
    const message = await response.json();
    return parseToFullCalendar(message.data);
}



function getDate(date) {
    const d = new Date(date);
    const offset = new Date().getTimezoneOffset()/60;

    let day = d.getDate();
    // day = d.getHours() - offset == 0 ? day+1 : day;

    let month = d.getMonth() + 1;
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    const fullDate = `${d.getFullYear()}-${month}-${day}`;

    return fullDate;
}