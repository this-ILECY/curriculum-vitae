export function GetDateDiff(start: string, end: string) {
    const startDate = new Date(start);
    const endDate = new Date(end);

    let yearDiff = endDate.getFullYear() - startDate.getFullYear();
    let monthDiff = endDate.getMonth() - startDate.getMonth();

    if (monthDiff < 0) {
        monthDiff = (yearDiff * 12) + monthDiff
        yearDiff--;
    }

    return `${yearDiff == 0 ? '' : yearDiff + ' yrs and'} ${monthDiff} mos`
}