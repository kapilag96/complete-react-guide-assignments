import React from 'react';


const ValidationComponent = ({textLength}) => {
  const out = textLength < 5? 'Text too short' : 'Text long enough';
  return <p>{out}</p>;
}


const CharComponent = ({char, onClick}) => {
  const style = {
    'display': 'inline-block',
    'padding': '16px',
    'textAlign': 'center',
    'margin': '16px',
    'border': '1px solid black'}
  return <p style={style} onClick={onClick}>{char}</p>
}


export {ValidationComponent, CharComponent};