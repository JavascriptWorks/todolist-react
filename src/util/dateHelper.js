dateToString(date) {
    let dd = date.getDate();
    let mm = date.getMonth() + 1; //Jan is 0
    let yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`
}

export default {dateToString};