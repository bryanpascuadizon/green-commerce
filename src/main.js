import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//COMPONENTS
import Home from './components/home'
import Navigation from './components/navigation'

//CSS
import './assets/layout/main.css'
import ProductDisplay from './components/productDisplay'

const Main = () => {
    return (
        <Provider store={store}>
            <div className="container">
                <Navigation />
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:name" element={<ProductDisplay />} />
                    </Routes>
                </Router>
            </div>
        </Provider>

    )
}

export default Main;