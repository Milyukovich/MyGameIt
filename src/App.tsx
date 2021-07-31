import React from 'react';

interface IHuynya {
  zalupa: string;
  konskaya: ReadonlyArray<number>;
}

interface IProps {
  huynya?: IHuynya; // опциональный параметр
  handleHuynya?(dermo: string | number): void;
}



const App: React.FunctionComponent<IProps> = ({ huynya, handleHuynya }) => {
  handleHuynya?.('kek');
  return (
    <> 
      <p>NIHUYA NA TYPESCRIPT EBOSHIM PRIKIN'</p>
     </>
  );
}

export default App;
