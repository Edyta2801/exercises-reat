import React from 'react';
import Button from './Button'



const names = ['Ala', 'Ola', 'Justyna']


const App = (props) => (
  <div>
    <div>
      {names}
    </div>
    <ul>
      {names.map(name =>
        <li key={name}>
          {name} </li>)
      }
    </ul>
    <Button
      label='Click me'
      onClickHandler={()=>alert('Kliknij mnie')}

    />
    <Button
      label='Clicked me'
      onClickHandler={()=>alert('Kliknąłeś')}

    />
  </div>
);

export default App;
