import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const style = { margin: 12 }

const Button = (props) => (
  <div>
    <RaisedButton
      label="Primary"
      primary={Boolean(Math.round(Math.random()))}
      secondary={Boolean(Math.round(Math.random()))}
      style={style}
      onClick={props.onClick}
    />
  </div>
);



export default Button;