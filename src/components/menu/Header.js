import React from 'react';

const Header = ({ setShowForm, showForm }) => {
  const showFormHandler = (e) => {
    setShowForm(!showForm);
  };

  return (
    <nav className="navbar">
      <p>WeatherApp</p>
      <div className="nav-icons">
        <button type="submit" className="navbar-btn " onClick={showFormHandler}>
          <i className="fas fa-plus fa-lg"></i>
        </button>
      </div>
    </nav>
  );
};

export default Header;
