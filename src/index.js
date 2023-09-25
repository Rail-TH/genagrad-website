import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import App from './App'
import './css/style.css'
import { BrowserRouter } from "react-router-dom";

// var images = document.querySelectorAll('img');
// if (images.length > 0) {
// images.forEach(function(image) {
//     image.addEventListener('click', function() {
//         var modal = document.getElementById('modal');
//         var modalImage = document.getElementById('modalImage');
//         modal.style.display = 'block';
//         modalImage.src = this.src;
//     });
// });
// }
// var closeButton = document.querySelector('.close');
// closeButton.addEventListener('click', function() {
//     var modal = document.getElementById('modal');
//     modal.style.display = 'none';
// });
// window.addEventListener('click', function(event) {
//     var modal = document.getElementById('modal');
//     if (event.target === modal) {
//         modal.style.display = 'none';
// }
// });
// var burgerToggle = document.getElementById('burger-toggle');
// burgerToggle.checked = false;

const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(
    <BrowserRouter>
        <main>
            <App />
        </main>
    </BrowserRouter>
)