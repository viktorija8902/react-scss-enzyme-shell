import React from 'react';
import "./../styles/AnotherFile.scss"

function AnotherFile(props) {
  return (
    <p className="App-intro">
      {props.test}
    </p>
  );
}

export function sum(a, b) {
  return a + b;
}

export default AnotherFile;
