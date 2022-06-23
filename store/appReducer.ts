import {v1} from 'uuid'

export type cardType = {
  id: string
  src: string
  title: string
  tags: string
}
export type stateType = {
  cards: cardType[]
}
export type ActionsType = ReturnType<typeof loadMoreAc>

const initialState: stateType = {
  cards: [
    {id: v1(), src: '', title: '', tags: ''},
    {id: v1(), src: '', title: '', tags: ''},
    {id: v1(), src: '', title: '', tags: ''},
    {id: v1(), src: '', title: '', tags: ''},
  ]
}

export const appReducer = (state: stateType = initialState, action: ActionsType): stateType => {
  switch (action.type) {
    case "LOAD_MORE":
      return {...state, cards: [...state.cards].concat(initialState.cards.map(el => ({...el, title: el.title + 2})))}
    default:
      return state
  }
}

export const loadMoreAc = () => {
  return {type: 'LOAD_MORE'} as const
}
