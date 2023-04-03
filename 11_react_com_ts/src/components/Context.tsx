import React, { useContext } from 'react';
import { AppContext } from '../App';

const Context = () => {
  const contextDetails = useContext(AppContext);

  return (
    <>
      {contextDetails && (
        <div>
          <h2>Language: {contextDetails.language}</h2>
          <h4>Framework: {contextDetails.framework}</h4>
          <p>Quantity: {contextDetails.projects}</p>
        </div>
      )}
    </>
  );
};

export default Context;
