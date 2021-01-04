import React from 'react';
import Form from '../form/Form';
import Header from '../menu/Header';
import DisplayLoc from './DisplayLoc';

const MainTab = ({
  setShowForm,
  showForm,
  setQuery,
  query,
  setCurrentWeather,
  locationHandler,
  locationList,
  setLocationList,
}) => {
  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      <div className="main-tab">
        {showForm ? (
          <Form
            setQuery={setQuery}
            query={query}
            setCurrentWeather={setCurrentWeather}
            locationHandler={locationHandler}
            locationList = {locationList}
          />
        ) : null}
        <div className="main-body">
          {locationHandler.length > 0 ? (
            <DisplayLoc
              locationList={locationList}
              setLocationList={setLocationList}
            />
          ) : (
            <p>No locations to display</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MainTab;
