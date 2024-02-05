import React from 'react';
import Header from './components/Header'
import InputComponent from './components/InputComponent';
import ScrollContainer from './components/ScrollContainer'

const  App: React.FC = () => {
  return (
    <>
    <Header />
    <InputComponent />
    <ScrollContainer />
    </>
  );
}

export default App;
