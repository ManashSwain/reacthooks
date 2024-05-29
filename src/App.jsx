import React from 'react';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';
import Test from './components/test';
import UseMemo from './components/UseMemo';
import UseCallback from './components/UseCallback';
import Profile from './components/Profile';
import Footer from './components/footer';
import UseReducer from './components/UseReducer';
import UseLayoutEffect from './components/UseLayoutEffect';
import CustomHook from './components/CustomHook';


function App() {
  

  return (
    <>
    <UseState/>
    <UseEffect/>
    <UseRef/>
    <UseMemo/>
    <UseCallback/>
    <Profile/>
    <Footer/>
    <UseReducer/>
    <UseLayoutEffect/>
    <CustomHook/>
    <Test/>
    </>
  )
}

export default App
