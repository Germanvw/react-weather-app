import React from 'react';

const SingleLoc = ({ location, locationList, setLocationList }) => {
  const removeHandler = (e) => {
    setLocationList(locationList.filter((e) => e.id !== location.id));
  };

  return (
    <div className="single-location">
      <div className="left-display">
        <h3 className="name-display">
          {`${location.name}, ${location.sys.country}`}{' '}
        </h3>
        <p className="temp-display">
          {`${Math.round(location.main.temp)} °C`}{' '}
        </p>
        <p className="desc-display">{location.weather[0].description} </p>
      </div>
      <div className="right-display">
        <button className="destroy" onClick={removeHandler}>
          <i className="fas fa-times"></i>
        </button>
        {
          <img
            className="img-display"
            src={`http://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
          ></img>
        }
        <p className="min-max">{`${Math.round(
          location.main.temp_min
        )} / ${Math.round(location.main.temp_max)} °C`}</p>
      </div>
    </div>
  );
};

export default SingleLoc;
