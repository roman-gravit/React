import React from 'react';
import ReactDOM from 'react-dom/client';
import { Counter, Lesson, Button } from './05_props/Lesson';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Lesson child={<Button />}><Counter /></Lesson>
);