import React from 'react';
import {createRoot} from 'react-dom/client';
import '../assets/app.css';

const test = (
    <div>
        <h1>Hello world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque labore odio ipsam nam laborum tempora dolor laboriosam nihil. Qui eligendi nobis fugiat omnis. Saepe nulla dignissimos accusamus minus laboriosam quaerat!</p>
    </div>
)

const container=document.createElement('div')
document.body.appendChild(container);
const root=createRoot(container);
root.render(test)