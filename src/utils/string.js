import timeformat from './timeformat';

export const isValidDate = (str) => {
    if (str) {
        const time = timeformat.prefMoment(str);
        if (time) {
            return time.isValid();
        }
    }
    return false;
}