import dayjs from 'dayjs'

export function FormatDate(date){
    return dayjs(date).format('dddd, MMMM, D');
}

export function FormatDay(date){
    return dayjs(date).format('MMMM, D');
}