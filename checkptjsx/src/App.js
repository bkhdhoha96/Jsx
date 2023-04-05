import React from 'react';
import './App.css';
import ProfilePhoto from './Profile/ProfilePhoto';
import FullName from './Profile/FullName';
import Adress from './Profile/Address';

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
    </div>
  );
}

export default App;
