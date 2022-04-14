import React from 'react'
import Header from '@components/Header';
import Footer from '@components/Footer';
import SignModal from '@components/SignModal';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
        <SignModal />
    </>
  )
}

export default Home