import React from 'react'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

//user import

import { URL } from './config';
import ZainCash from './Components/ZainCash';
import RedirectUrl from './Components/Redirect'

//component

function App() {
  //
  return (
    <Router>
      <Routes>
        <Route path={URL?.root} caseSensitive element={<ZainCash />} />
        <Route path={URL?.redirectUrl} caseSensitive element={<RedirectUrl />} />
      </Routes>
    </Router>
  );
}

export default App;
