import { Fragment } from "react";
import Header from "./components/Header/Header.js";
import ProductList from "./components/ProductList/ProductList.js"


function App() {
    return (
        <Fragment>
            <Header />
            <ProductList />
        </Fragment>
    );
}

export default App;
