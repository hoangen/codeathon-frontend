import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './rxjs.config'
import Root from './components/app/root.component'
import configureStore from './store'
import './assets/css/bootstrap.min.css'
import './assets/css/common.css'
import './assets/css/personal-common.css'
import './assets/css/autosuggestioninput.css'
import './assets/css/product-information.css'
import './assets/css/react_style.css'

(async function () {
    let store = await configureStore()
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Root />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    )
})()
