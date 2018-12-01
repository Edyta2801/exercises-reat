import React, { Component } from 'react';
import DisplayMyName from './DisplayMyName'
import WhatReactRenders from './WhatReactRenders'

const name='Justyna'

const App =()=>(
      <div>
        <DisplayMyName 
        name={name}
        />
        <WhatReactRenders />
      </div>
    );

export default App;
