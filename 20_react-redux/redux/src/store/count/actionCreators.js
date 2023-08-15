import * as actionType from './constants';

export const addAction = (value) => {
  return { type: actionType.ADD, payload: { value } }
}

export const subAction = (value) => {
  return { type: actionType.SUB, payload: { value } }
}
