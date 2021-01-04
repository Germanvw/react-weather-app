import React, { useState } from 'react';
import MainTab from './components/tabs/MainTab';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [query, setQuery] = useState('');
  const [currentWeather, setCurrentWeather] = useState({});
  const [locationList, setLocationList] = useState([]);

  const locationHandler = (currentWeather) => {
    if (locationList.length > 0) {
      locationList.map((e) => {
        if (e.id !== currentWeather.id) {
          setLocationList([...locationList, currentWeather]);
        }
      });
    } else {
      setLocationList([...locationList, currentWeather]);
    }
  };

  return (
    <div className="app-container">
      <MainTab
        setShowForm={setShowForm}
        showForm={showForm}
        setQuery={setQuery}
        query={query}
        setCurrentWeather={setCurrentWeather}
        locationHandler={locationHandler}
        locationList={locationList}
        setLocationList={setLocationList}
      />
    </div>
  );
}

export default App;
