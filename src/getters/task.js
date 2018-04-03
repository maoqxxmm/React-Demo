import timeformat from "../utils/timeformat";

export const hasDueDate = task => {
    const dd = timeformat.formatToUtc(task.get('dueDate'));
    const sd = timeformat.formatToUtc(task.get('startDate'));
    return dd && (timeformat.prefMoment(dd) > timeformat.prefMoment(sd));
}

export const getRealDueDate = task => {
  if (hasDueDate(task)) {
    return timeformat.formatToUtc(
      timeformat.getRealDueDate(task.get("dueDate"), task.get("isAllDay"))
    );
  } else {
    return task.get("startDate");
  }
};
