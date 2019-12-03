import React, { Suspense } from 'react';
import './App.css';

import { fetchData } from './Api';

const resource = fetchData();

function App() {
  return (
    <div className='container my-5'>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
