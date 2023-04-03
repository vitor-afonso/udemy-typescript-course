import React from 'react';

interface Props {
  name: string;
}

const SecondComponent = (props: Props) => {
  return (
    <div>
      <p>O meu segundo componente</p>
      <p>O nome é {props.name}</p>
    </div>
  );
};

export default SecondComponent;
