
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import StockPage from './stock/components/StockPage';
import ItemInputRow from './stock/components/ItemInputRow';

const App = () => (
  <BrowserRouter>
    <Header brand="Inventory Manager 4.0" />

    <Routes>
      <Route path='/' element={<StockPage />} />
      <Route path='/add' element={<ItemInputRow />} />
      <Route path='/edit/:id' element={<ItemInputRow />} />
    </Routes>

    <Footer footNote="&copy; All Rights Reserved - CTS 2023" />
  </BrowserRouter>
);

export default App;
