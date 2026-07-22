import dayjs from 'dayjs'

export function FormatDay(date){
    return dayjs(date).format('dddd, MMMM, D');
}