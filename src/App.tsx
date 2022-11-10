import React from 'react';

import MyNav from './MyNav';

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Outlet />
    </div>
  );
}

export default App;
