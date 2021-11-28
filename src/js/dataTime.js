import { format, compareAsc } from 'date-fns';
import {getRefs} from './getRefs'
const refs = getRefs();
refs.dataDate.textContent = format(new Date(), 'do');
refs.dataMonthTime.textContent = format(new Date(), 'MMMM');
refs.dataMonth.textContent = format(new Date(), 'EEE');
setInterval(() => {
    refs.dataTime.textContent = format(new Date(), 'HH:mm:ss');
}, 1000);




