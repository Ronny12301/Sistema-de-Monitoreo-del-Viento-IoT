function getStartAndEndOfDayToUTC(date) {
    const startOfDay = new Date(date);

    const offset = new Date().getTimezoneOffset()/60;
    startOfDay.addHours(offset);
    
    const endOfDay = new Date(startOfDay);

    endOfDay.setDate(startOfDay.getDate() + 1);

    return {
        startOfDay: startOfDay,
        endOfDay: endOfDay,
    }
}

// https://stackoverflow.com/questions/1050720/how-to-add-hours-to-a-date-object
Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
}

module.exports = {
    getStartAndEndOfDayToUTC,
};