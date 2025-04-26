const dates = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

const myBirthday = {
    day: 4,
    month: 9
}
export function checkBirthday(day, month) {

    if (day === myBirthday.day && month === myBirthday.month) return 'Happy Birthday!';

    const monthIsCorrect = Object.keys(dates).includes(month.toString());
    const dayIsCorrect = !(day > dates[month]) && !(day < 1);

    if (monthIsCorrect && dayIsCorrect) {
        return 'Today is not your birthday, sorry.';
    } else {
        return 'Invalid date'
    }
}
