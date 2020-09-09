import { ADD_REMINDER, DELETE_REMINDER } from "../constants";
import { bake_cookie, read_cookie } from "sfcookies";

const reminder = (action) => {
  const { text, dueDate } = action;
  return {
    id: Math.random(),
    text,
    dueDate,
  };
};

const removeById = (state = [], id) => {
  const reminders = state.filter((reminder) => reminder.id !== id);
  return reminders;
};

const reminders = (state = [], action) => {
  let reminders = null;
  state = read_cookie("reminders");
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      bake_cookie("reminders", reminders);
      //console.log("reminders as state", reminders);
      return reminders;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);

      //console.log("reminders as state", reminders);
      return reminders;
    default:
      return state;
  }
};

export default reminders;
