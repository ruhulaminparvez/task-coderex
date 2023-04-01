import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
          <Header/>
          <Outlet/>  
          <Footer/>
        </>
    );
};

export default Main;