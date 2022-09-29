export const formatDate = dateStr => {
    const doubleDigit = digit => digit < 10 ? "0"+digit : digit;
    const dateObj = new Date(dateStr);
    const year = dateObj.getFullYear();
    const month = doubleDigit(dateObj.getMonth() + 1);
    const date = doubleDigit(dateObj.getDate());
    return [year, month, date].join("-");
};