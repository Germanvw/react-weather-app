import React from 'react';
import SingleLoc from './SingleLoc';

const DisplayLoc = ({ locationList, setLocationList }) => {
  return (
    <div className="location-list-all">
      {locationList.map((location) => (
        <SingleLoc
          key={location.id}
          location={location}
          locationList={locationList}
          setLocationList={setLocationList}
        />
      ))}
    </div>
  );
};

export default DisplayLoc;
