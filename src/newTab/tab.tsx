import React from 'react';
import { Route,Routes } from 'react-router-dom';
import About from './component/about';
import Home from './component/home';



const Tabs:React.FC = () => {
    return (
        <div>
            <ul>
                <li>
                    <a href="#/">Home</a>
                </li>
                <li>
                    <a href="#/about">Abount</a>
                </li>
            </ul>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
};

export default Tabs;