async function fetchDayData(date) {
    const response = await fetch(`/getDayData?created_at=${date}`);
    const data = await response.json();
    return data.data;
}