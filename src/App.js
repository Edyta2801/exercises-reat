import React, { Component } from 'react';




const names = ['Ala', 'Ola', 'Justyna']
const namesList = names.map(name =>
  <li
    key={name}
  >
    {name}
  </li>)


const App = (props) => (
  <div>
    <div>
      {names}
    </div>
    <ul>
      {namesList}
    </ul>
  </div>
);

export default App;
