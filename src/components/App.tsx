import React from 'react';
import Header from './Body/Header/Header';
import '../pages/index.scss'
import AsideHeader from './UI/AsideHeader/AsideHeader';
import Main from './Body/Main/Main';
function App() {
  return (
    <>
      <Header />
      <AsideHeader />
      <Main />
    </>
  );
}

export default App;
