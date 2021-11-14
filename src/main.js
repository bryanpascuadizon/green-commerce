import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//COMPONENTS
import Home from './components/home'

//CSS
import './assets/layout/main.css'

const Main = () => {
    return (
        <Provider store={store}>
            <div className="container">
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                    </Routes>
                </Router>
            </div>
        </Provider>

    )
}

export default Main;