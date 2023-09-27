import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import App from './App'
import './css/style.scss'
import { BrowserRouter } from "react-router-dom";

const app = ReactDOMClient.createRoot(document.getElementById("app"))
app.render(
    <BrowserRouter>
        <main>
            <App />
        </main>
    </BrowserRouter>
)