// 6 - useState

import React, { useState, ChangeEvent } from 'react';

const State = () => {
  // here we define what type can be its initial value
  const [text, setText] = useState<string | null>('A testar useState hook com input');

  // here we must define the type of event(ChangeEvent)
  // and what we gonna change(HTMLInputElement)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>O texto é: {text}</p>
      <input type='text' onChange={handleChange} />
    </div>
  );
};

export default State;
