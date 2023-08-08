import { ADD,SUB } from './constants';

export const addAction = (value) => {
  return { type: ADD, payload: { value } }
}

export const subAction = (value) => {
  return { type: SUB, payload: { value } }
}