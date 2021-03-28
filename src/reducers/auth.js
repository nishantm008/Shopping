import { CREATE_USER } from '../actions/actions'

const initialState = {
  user: null
}

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_USER:
      return { ...state, user: payload }

    default:
      return state
  }
}
