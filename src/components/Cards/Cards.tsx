import React from 'react';
import {cardType, filtersType, selectCardAC} from "../../store/appReducer";
import {useDispatch, useSelector} from "react-redux";
import {rootStateType} from "../../store/store";
import './Cards.css'

type cardsPropType = { selectedFilter: filtersType }

export const Cards = ({selectedFilter}: cardsPropType) => {

  const dispatch = useDispatch()
  const cards = useSelector<rootStateType, cardType[]>(state => state.appReducer.cards)

  let filteredCards = [...cards]
  console.log(selectedFilter)

  if (selectedFilter) {
    filteredCards = filteredCards.filter(el => el.type === selectedFilter)
  }

  console.log(filteredCards)
  const finalCardClass = (isSelected: boolean) => {
    return isSelected ? 'card selectedCard' : 'card'
  }
  const onCardSelectHandler = (id: string) => {
    dispatch(selectCardAC(id))
  }
  return (
    <div className={'cardsContainer'}>
      {filteredCards.map(el => {
        return (
          <div
            key={el.id}
            className={finalCardClass(el.isSelected)}
            onClick={() => {
              onCardSelectHandler(el.id)
            }}>
            <img src={el.src} alt="no img" className={"cardImag"}/>
            <div className={"cardInner"}>
              <div className={"cardType"}>{el.type}</div>
              <div className={"cardTitle"}>{el.title}</div>
            </div>
          </div>
        )
      })}
    </div>
  );
};
