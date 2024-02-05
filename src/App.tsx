import React from 'react';
import Header from './components/Header'
import InputComponent from './components/InputComponent';
import ScrollContainer from './components/ScrollContainer'
import Footer from './components/Footer';

const  App: React.FC = () => {
  return (
    <>
    <Header />
    <InputComponent />
    <ScrollContainer />
    <Footer />
    </>
  );
}

export default App;
