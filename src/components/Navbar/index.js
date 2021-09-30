import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Cart from '../../pages/Cart';
import Home from '../../pages/Home';
import Faqs from '../../pages/Faqs';
import Product from '../../pages/Product';
import {CartProvider, useCart} from 'react-use-cart';

const Navabar = () => {
    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
    } = useCart();
    return (
       <>
         <Router>
       
            <div class="container">
                <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg class="bi me-2" width="40" height="32">  </svg>
                    <span class="fs-4">Simple Goods Buy</span>
                </a>

                <ul class="nav nav-pills">
                    <li class="nav-item"> <Link className="nav-link active" aria-current="page" as={Link} to="/">Home</Link> </li>
                    <li class="nav-item"><Link className="nav-link" as={Link} to="/about">About</Link></li>
                    <li class="nav-item"><Link className="nav-link" as={Link} to="/product">Product</Link></li>
                    <li class="nav-item"><Link className="nav-link" as={Link} to="/faqs">FAQs</Link></li>   
                    
                    <li class="nav-item"><Link className="nav-link" as={Link} to="#">
                        <i class="uil uil-shopping-cart uil-2x"></i>   Cart ({totalUniqueItems}) total Item: ({totalItems}) 
                        </Link>
                    </li>   
                </ul>
                </header>
            </div>
                  <div>
                     <Switch>
                        <Route path="/product">
                            <CartProvider>
                            <Product />
                            <Cart />
                            </CartProvider>
                        </Route>
                        <Route path="/faqs">
                            <Faqs />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
        
         </Router>     

       </>
    )
}

export default Navabar
