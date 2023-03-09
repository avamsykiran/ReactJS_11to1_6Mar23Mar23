
import { Fragment } from 'react';

import Counter from "./components/Counter";
import Header from "./components/Header";

const App = () => (
    <Fragment>
        <Header banner="React SPA 1.0" tagLine="..its my first attempt..." />
        <Counter />
    </Fragment>
);

export default App;
