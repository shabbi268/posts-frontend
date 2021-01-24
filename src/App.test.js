import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';


it('Should not crash', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div)
})
