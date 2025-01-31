export default function (inputDate?: any) {
    if (!inputDate) return "";
    let date = new Date(inputDate);
    let now = new Date();
    let timeFormatter = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric' });
    if (date.toDateString() === now.toDateString()) {
        return "Today " + timeFormatter.format(date);
    }
    let dayFormatter = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long' });
    let monthFormatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' });
    if (date.getFullYear() === now.getFullYear()) {
        return dayFormatter.format(date);
    }
    return monthFormatter.format(date);
}
