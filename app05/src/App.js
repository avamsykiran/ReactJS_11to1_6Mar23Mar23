import {Fragment} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import StockPage from './stock/components/StockPage';

const App = () => (
  <Fragment>
    <Header brand="Inventory Manager 3.0"/>
    <StockPage />
    <Footer footNote="&copy; All Rights Reserved - CTS 2023" />
  </Fragment>
);

export default App;
