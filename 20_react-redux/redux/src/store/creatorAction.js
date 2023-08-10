import * as actionType from './constants';

export const addAction = (value) => {
  return { type: actionType.ADD, payload: { value } }
}

export const subAction = (value) => {
  return { type: actionType.SUB, payload: { value } }
}

export const userAction = (value) => {
  return { type: actionType.CHANGE_USER, payload: { value } }
}

export const articlesAction = (value) => {
  return { type: actionType.CHANGE_ART, payload: { value } }
}
