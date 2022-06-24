import {v1} from 'uuid'
import Bitmap8 from './../assets/Bitmap-8.png'
import Bitmap7 from './../assets/Bitmap-7.png'
import Bitmap6 from './../assets/Bitmap-6.png'
import Bitmap5 from './../assets/Bitmap-5.png'
import Bitmap4 from './../assets/Bitmap-4.png'
import Bitmap3 from './../assets/Bitmap-3.png'
import Bitmap2 from './../assets/Bitmap-2.png'
import Bitmap1 from './../assets/Bitmap-1.png'
import Bitmap0 from './../assets/Bitmap.png'

export type filtersType = '' | 'Design' | 'Branding' | 'Illustration' | 'Motion'
export type cardType = {
  id: string
  src: string
  title: string
  type: filtersType
  isSelected: boolean
}
export type stateType = {
  cards: cardType[]
}
export type ActionsType = ReturnType<typeof loadMoreAc> | ReturnType<typeof selectCardAC>
const initialState: stateType = {
  cards: [
    {id: v1(), src: Bitmap8, title: 'SOFA', type: 'Design', isSelected: false},
    {id: v1(), src: Bitmap7, title: 'KeyBoard', type: 'Branding', isSelected: false},
    {id: v1(), src: Bitmap6, title: 'Work Media', type: 'Illustration', isSelected: false},
    {id: v1(), src: Bitmap5, title: 'DDDone', type: 'Motion', isSelected: false},
    {id: v1(), src: Bitmap4, title: 'Abstract', type: 'Design', isSelected: false},
    {id: v1(), src: Bitmap3, title: 'HandP', type: 'Branding', isSelected: false},
    {id: v1(), src: Bitmap2, title: 'Architect', type: 'Motion', isSelected: false},
    {id: v1(), src: Bitmap1, title: 'CalC', type: 'Design', isSelected: false},
    {id: v1(), src: Bitmap0, title: 'Sport', type: 'Branding', isSelected: false},
  ]
}

export const appReducer = (state: stateType = initialState, action: ActionsType): stateType => {
  switch (action.type) {
    case "LOAD_MORE":
      return {...state, cards: [...state.cards].concat(initialState.cards.map(el => ({...el, title: el.title + Math.ceil(Math.random()*5), id:v1()})))}
    case "SET_SELECTED":
      return {...state, cards: state.cards.map(el => el.id === action.id ? {...el, isSelected: !el.isSelected} : el)}
    default:
      return state
  }
}

export const loadMoreAc = () => {
  return {type: 'LOAD_MORE'} as const
}
export const selectCardAC = (id: string) => {
  return {type: 'SET_SELECTED', id} as const
}
