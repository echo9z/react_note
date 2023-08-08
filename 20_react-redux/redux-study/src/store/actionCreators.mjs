import { CHANGE_COUNT, CHANGE_NAME } from "./constants.mjs"
export const changeCountAction = (value) => {
  return {
    type: CHANGE_COUNT,
    payload: { value }
  }
}
export const changeNameAction = (value) => {
  return {
    type: CHANGE_NAME,
    payload: { value }
  }
}
