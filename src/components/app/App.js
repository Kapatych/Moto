import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.scss';


import Header from "../header";
import Footer from "../footer";
import HomePage from "../../pages/home-page";
import CartPage from "../../pages/cart-page";
import ContactPage from "../../pages/contact-page";
import CatalogPage from "../../pages/catalog-page";
import ProductPage from "../../pages/product-page";


function App() {
    return (
        <div className="app">
           <Header/>
            <main className='main'>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/catalog' component={CatalogPage}/>
                    <Route exact path='/catalog/categories/' render={ () => <div>Categories</div> }/>
                    <Route exact path='/catalog/:productId?' component={ProductPage}/>

                    <Route path='/catalog/categories/:categoryName?' component={CatalogPage}/>
                    {/*<Route path='/catalog/brands/:brandId?' component={CatalogPage}/>*/}

                    <Route path='/cart' component={CartPage}/>
                    <Route path='/contact' component={ContactPage}/>
                </Switch>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
