import React, { Component } from 'react';




const names = ['Ala', 'Ola', 'Justyna']


const App = (props) => (
  <div>
    <div>
      {names}
    </div>
    <ul>
      {names.map(name=>
        <li key={name}>
        {name} </li>)
      }
    </ul>
  </div>
);

export default App;
