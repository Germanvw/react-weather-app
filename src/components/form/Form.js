import React from 'react';
import credential from './credential';

const Form = ({
  setQuery,
  query,
  setCurrentWeather,
  locationHandler,
  locationList,
}) => {
  const searchHandler = (event) => {
    if (event.key === 'Enter' && query.trim() !== '') {
      const requestAPIHandler = async () => {
        const request = `?q=${query}&units=metric&appid=${credential.api_code}`; // Asking for the right info
        const response = await fetch(credential.base_url + request); // Fetch using the concatenated url ${BASE + request}
        const result = await response.json(); // Transforming answ to json
        setCurrentWeather(result);
        setQuery('');
        if (result != null && result.cod != 404) {
          locationHandler(result);
        }
      };
      requestAPIHandler();
    }
  };

  const submitHandler = (e) => {
    if (query.trim() !== '') {
      const requestAPIHandler = async () => {
        const request = `?q=${query}&units=metric&appid=${credential.api_code}`; // Asking for the right info
        const response = await fetch(credential.base_url + request); // Fetch using the concatenated url ${BASE + request}
        const result = await response.json(); // Transforming answ to json
        setCurrentWeather(result);
        setQuery('');
        if (result != null && result.cod != 404) {
          locationHandler(result);
        }
      };
      requestAPIHandler();
    }
  };

  return (
    <div className="searchbar">
      <input
        className="search-input"
        type="text"
        className="search-location"
        placeholder="City..."
        name="location"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={searchHandler}
      ></input>
      <button onClick={submitHandler}>Search</button>
    </div>
  );
};

export default Form;
