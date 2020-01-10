import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.scss';

import Header from "../../containers/header";
import Footer from "../footer";
import HomePage from "../../containers/home-page";
import CartPage from "../../containers/cart-page";
import ContactPage from "../../containers/contact-page";
import CatalogPage from "../../containers/catalog-page";
import ProductPage from "../../containers/product-page";


function App() {
    return (
        <div className="app">
           <Header />
            <main className='main'>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/catalog' component={CatalogPage}/>
                    <Route exact path='/search' component={CatalogPage}/>
                    <Route exact path='/catalog/categories/' render={ () => <div>Categories</div> }/>
                    <Route exact path='/catalog/:productName?' component={ProductPage}/>
                    <Route path='/catalog/categories/:categoryName?' component={CatalogPage}/>
                    <Route path='/cart' component={CartPage}/>
                    <Route path='/contact' component={ContactPage}/>
                </Switch>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
