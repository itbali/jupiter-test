import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {filtersType, loadMoreAc} from "./store/appReducer";
import {Cards} from "./components/Cards/Cards";
import {useDispatch} from "react-redux";

function App() {

  const dispatch = useDispatch()
  const [filter, setFilter] = useState<filtersType>
  ('')

  const filterClassName = (currentFilter: string) => {
    return filter === currentFilter ? 'filter filterSelected' : 'filter'
  }

  const filterProcessHandler = (clickedFilter:filtersType)=>{
    setFilter(clickedFilter)
  }

  const onLoadMoreClickHandler = ()=>{
    dispatch(loadMoreAc())
  }

  return (
    <div className={'wrapper'}>
      <Header/>
      <section className={'container'}>
        <ul className={'filters'}>
          <li
            className={filterClassName('')}
            onClick={()=>filterProcessHandler('')}
          >Show All</li>
          <li
            className={filterClassName('Design')}
            onClick={()=>filterProcessHandler('Design')}
          >Design</li>
          <li
            className={filterClassName('Branding')}
            onClick={()=>filterProcessHandler('Branding')}
          >Branding</li>
          <li
            className={filterClassName('Illustration')}
              onClick={()=>filterProcessHandler('Illustration')}
          >Illustration</li>
          <li
            className={filterClassName('Motion')}
            onClick={()=>filterProcessHandler('Motion')}
          >Motion</li>
        </ul>
        <div          className="filterSelectButtonContainer"
        >
          <select
          name="filters"
          id="filters"
          className="filterSelectButton"
        value={filter}
        onChange={(e)=>{filterProcessHandler(e.target.value as filtersType)}}>
          <option value={''} >Show All</option>
          <option value={'Design'} >Design</option>
          <option value={'Branding'} >Branding</option>
          <option value={'Illustration'} >Illustration</option>
          <option value={'Motion'} >Motion</option>
        </select>
        </div>
        <Cards selectedFilter={filter}/>
        <button onClick={onLoadMoreClickHandler} className={'loadMore'}>Load More</button>
      </section>
    </div>
  );
}

export default App;
