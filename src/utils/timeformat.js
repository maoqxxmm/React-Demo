import moment from '../libs/moment';

const utcFm = 'YYYY-MM-DDTHH:mm:00.000ZZ';

const timeformat = {

    prefMoment: time => {
        if (time && /^\d{4}-\d{2}-\d{2}$/.test(time)) {
            return moment(time).add(1, 'hour').startOf('day');
        } else {
            return moment(time);
        }
    },

    prefMomentFromUtc: (time, format) => {
        return moment.utc(time, format).local();
    },

    startOfDay: (date) => {
        return moment(date).startOf('day');
    },

    getOffsetOfDay: (left, right) => {
        return timeformat.startOfDay(left).diff(timeformat.startOfDay(right), 'day');
    },

    getRealDueDate: (dueDate, isAllDay, isStart) => {
        var mdue = timeformat.prefMoment(dueDate || undefined);
        if (isStart) {
            return mdue;
        }
        if (isAllDay && mdue.isSame(mdue.clone().startOf('day'))) {
            return mdue.subtract(1, 'd');
        } else {
            return mdue;
        }
    },

    formatToUtc: function(d) {
        if (!d) {return;}
        return moment(d).utc().format(utcFm);
    }

}

export default timeformat;