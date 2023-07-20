import React from 'react';
import { useState, useEffect } from 'react';
// import './App.css';

const Items = ({ fDataItem }) => {
  // console.log(fDataItem);
  return (
    <>
      {fDataItem.filters.map((Val) => {
        return (
          <li className="checkbox" key={Val.id}>
            <input type="checkbox" id={`check-${Val.id}`} name={fDataItem.section_key} value={Val.id} className="filter-on-change"></input>
            <label className="checkmark" htmlFor={`check-${Val.id}`}>
              <span className={Val.icon}></span>
              <span className="name">{Val.name}</span>
            </label>
          </li>
        );
      })}
    </>
  );
};

const AppProductListAndFilters = () => {
  const [filtersData, setfiltersData] = useState({
    items: [],
    isLoaded: true,
    error: null
  });

  const fetchData = () => {
    fetch('https://private-anon-b9d650cdfe-tiskstrihucz.apiary-mock.com/api/filters')
      .then((res) => res.json())
      .then((fetchData) => {
        // console.log(fetchData.data);
        setfiltersData({
          items: fetchData.data,
          isLoaded: false
        });
      })
      .catch((error) => {
        setfiltersData({ error, isLoaded: false })
        console.log(error.message);
      });
  }

  useEffect(() => {
    fetchData()
  }, []);

  // console.log(filtersData.items);

  return (
    <aside className="sidebar">
      <div className="inner">
        <div className="filter">
          <ul className="category-filter">
            {!filtersData.isLoaded ? (
              filtersData.items.map(fDataItem => {
                return <Items key={fDataItem.section_key} fDataItem={fDataItem} />;
              })
            ) : (
              <p>Loading...</p>
            )}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default AppProductListAndFilters;
