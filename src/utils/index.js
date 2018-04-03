import timeformat from './timeformat';
import { getRealDueDate } from '../getters/task'

export const getCompletedTimeOffsetDays = (task) => {
    const completedTime = task.get('completedTime');
    if (!completedTime) {
        return false;
    }
    const completedDay = timeformat.prefMomentFromUtc(completedTime).startOf('day');
    const today = timeformat.startOfDay();
    return completedDay.diff(today, 'days');
}

export const getOffsetDays = (task, basedate) => {
    return getOffsetDaysOfDay(task.get('startDate', basedate));
}

export const getOffsetDaysOfDay = (duedate, basedate) => {
    return timeformat.getOffsetOfDay(duedate, basedate);
}

export const getOffsetDueDateDays = (task, basedate) => {
    var utcDate = timeformat.prefMoment(getRealDueDate(task));
    // 如果是非全天，需要减1s来修复dueDate在第二天0点的情况
    if (!task.get('isAllDay') && task.get('dueDate') && task.get('dueDate') !== task.get('startDate')) {
        utcDate = new Date(utcDate.getTime() - 1000);
    }
    utcDate = timeformat.startOfDay(utcDate);

    basedate = basedate ? timeformat.prefMoment(basedate) : new Date();
    basedate = timeformat.startOfDay(basedate);
    
    return Math.floor((utcDate - basedate) / (1000 * 3600 * 24));
}