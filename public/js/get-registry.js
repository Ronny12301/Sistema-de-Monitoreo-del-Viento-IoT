

function parseToFullCalendar(messages) {
    let calendarEvents = [];
    messages.forEach(message => {
        const event = {
            title: message.raw_string,
            start: message.created_at,
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

