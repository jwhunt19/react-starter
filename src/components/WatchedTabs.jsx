import React from 'react';

const WatchedTabs = ({handleWatch, watched}) => {
  if (watched === true) {
    return (
      <div className="tabs-wrapper">
        <span onClick={handleWatch} className="watched tab selected">Watched</span>
        <span onClick={handleWatch} className="to-watch tab">To Watch</span>
      </div>
    )
  } else if (watched === false) {
    return (
      <div className="tabs-wrapper">
        <span onClick={handleWatch} className="watched tab">Watched</span>
        <span onClick={handleWatch} className="to-watch tab selected">To Watch</span>
      </div>
    )
  }
}


export default WatchedTabs;