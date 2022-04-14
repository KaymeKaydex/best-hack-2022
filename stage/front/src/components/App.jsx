import 'normalize.css';
import React from 'react';

import Review from '@components/Review';
import Catalog from '@components/Catalog';
import {Routes, Route} from 'react-router-dom'
import NotFoundPage from '@components/NotFoundPage';
import PersonalAccount from '@components/PersonalAccount';
import StockPage from '@components/StockPage';
import Currency from '@components/Currency';
import PaymentPage from './PaymentPage';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route path='/payment' element={<PaymentPage/>} />
      <Route path='/' element={<Home/>}>
        <Route path='' element={<Review />} />
        <Route path='catalog' element={<Catalog />} />
        <Route path='currency' element={<Currency />} />
        <Route path='stock/:id' element={<StockPage />} />
        <Route path='user/:id' element={<PersonalAccount />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
