import { ReducerAction } from 'react'

const DEFAULT_STATE = {
  showGifImage: 'yes' as string,
  langCode: null,
  password: null
}

const applicationReducer = (state = DEFAULT_STATE, action: any) => {
  switch (action.type) {
    case 'SET_SHOW_GIF_ICON':
      return {
        ...state,
        showGifImage: action.payload
      }
    default:
      return state
  }
}

export default applicationReducer
