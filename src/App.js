import React from 'react'
import Button from './Button'

const App = (props) => (
  <div>
    <Button
    onClick={()=>alert('1')}
    />
    <Button
    onClick={()=>alert('2')}
    />
  </div>
);



export default App;