import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import { App } from "./18-router/Lesson";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './18-router/components/home';
import Contacts from './18-router/components/contacts';
import Posts from './18-router/components/posts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <BrowserRouter>
            <App>
                <Routes>
                    <Route exact path='/' component={Home} />
                    <Route path='/contacts' component={Contacts} />
                    <Route exact path='/posts' component={Posts} />
                </Routes>
            </App>
        </BrowserRouter>
    </StrictMode>

);