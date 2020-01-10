import React, {Suspense, lazy} from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.scss';
import Spinner from "../spinner";

import Header from "../../containers/header";
import Footer from "../footer";

const HomePage = lazy(() => import('../../containers/home-page'));
const CartPage = lazy(() => import('../../containers/cart-page'));
const CatalogPage = lazy(() => import('../../containers/catalog-page'));
const ProductPage = lazy(() => import('../../containers/product-page'));
const ContactPage = lazy(() => import('../../containers/contact-page'));

function App() {
    return (
        <div className="app">
            <Header/>
            <main className='main'>
                <Suspense fallback={<Spinner/>}>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/catalog' component={CatalogPage}/>
                        <Route exact path='/search' component={CatalogPage}/>
                        <Route exact path='/catalog/categories/' render={() => <div>Categories</div>}/>
                        <Route exact path='/catalog/:productName?' component={ProductPage}/>
                        <Route path='/catalog/categories/:categoryName?' component={CatalogPage}/>
                        <Route path='/cart' component={CartPage}/>
                        <Route path='/contact' component={ContactPage}/>
                    </Switch>
                </Suspense>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
