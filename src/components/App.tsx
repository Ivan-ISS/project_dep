import React, { useState } from 'react';
// import './App.scss';
import * as classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import Content from './content/Content';

export const App = () => {
    const [ count, setCount ] = useState<number>(0);

    const increment = () => setCount(prev => prev + 1);

    return (
        <div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}>
                <span>inc</span>
            </button>
            <Content />
            <Outlet/>
        </div>
    );
};