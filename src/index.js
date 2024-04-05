import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import { News } from "./16-api/Lesson";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <News />
    </StrictMode>

);