import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DriveList from './DriveList';
import Login from './component/login/login';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  useEffect(() => {
    if (isLoggedIn) {
      // Fetch data from the server API only if logged in
      axios
        .get('https://drive-api.onrender.com/api/drives')
        .then((response) => {
          setData(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [isLoggedIn]); // Run this effect whenever the login status changes

  const handleLogin = () => {
    // This function will be called by the Login component upon successful login
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn && <Login onLogin={handleLogin} />} {/* Show login only if not logged in */}
      {isLoggedIn && (
        <div>
          <h1>List of Drives</h1>
          {data.length > 0 ? <DriveList drives={data} /> : <p>Loading...</p>}
        </div>
      )}
    </div>
  );
};

export default App;
