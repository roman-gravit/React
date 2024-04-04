import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import { Lesson } from "./14-portal/Lesson";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Lesson />
    </StrictMode>

);