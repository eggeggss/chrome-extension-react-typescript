import React from "react";
import { createRoot } from "react-dom/client";
import '../assets/app.css';
import '../content/css/nucleo-icons.css';
import '../content/css/googlefont.css';
import '../content/css/nucleo-svg.css';
import '../content/css/material-dashboard.css?v=3.0.5';
import 'material-icons/iconfont/material-icons.css'
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";
import $ from 'jquery';
import Tabs from "./tab";
import {HashRouter}from "react-router-dom";

require("../content/js/core/popper.min.js");
require("../content/js/plugins/perfect-scrollbar.min.js");
require("../content/js/core/bootstrap.bundle.min.js");
require("../content/js/plugins/smooth-scrollbar.min.js");
require("../content/js/plugins/dragula/dragula.min.js");
require("../content/js/plugins/jkanban/jkanban.js");


const Options = (
    <HashRouter>
        <Tabs/>
    </HashRouter>
)

const container = document.createElement('div')
document.body.appendChild(container);
const root = createRoot(container);
root.render(Options)