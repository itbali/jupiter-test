import React from 'react';
import {cardType, filtersType} from "../../store/appReducer";
import {useSelector} from "react-redux";
import {rootStateType} from "../../store/store";

type cardsPropType = { filterSelected:filtersType }

export const Cards = ({filterSelected}:cardsPropType) => {

  const cards = useSelector<rootStateType, cardType[]>(state => state.appReducer.cards)

  let filteredCards = [...cards]

  if (filterSelected) {
    filteredCards = filteredCards.filter(el => el.type === filterSelected)
  }

  return (
    <div className={'container'}>
      {filteredCards.map(el=>{
        return (
          <div key={el.id} className={"card"}>
            <img src={el.src} alt="ni img" className={"cardImag"}/>
            <div className={"cardInner"}>
              <span className={"cardType"}>{el.type}</span>
              <span className={"cardTitle"}>{el.title}</span>
            </div>
          </div>
        )
      })}
    </div>
  );
};
