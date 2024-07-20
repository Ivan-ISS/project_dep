import React, { useState } from 'react';
// import './App.scss';
import * as classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import Content from './content/Content';
import avatarPng from '@/assets/avatar.png';
import avatarJpg from '@/assets/placeholderDefault.jpg';
import AvatarSvg from '@/assets/placeholderAvatar.svg';
import { useAppSelector, useAppDispatch } from '@/redux/store';
import { selectCounter } from '@/redux/slices/firstSelector';
import { inc } from '@/redux/slices/firstSlice';

// TREE SHAKING
function TODO(a: number) {
    console.log('TODOFUNCTION');
}

export const App = () => {
    const [ count, setCount ] = useState<number>(0);
    const counter = useAppSelector(selectCounter);
    const dispatch = useAppDispatch();

    const incrementFromRedux = () => {
        dispatch(inc());
    }

    const increment = () => setCount(prev => prev + 1);
    /* TODO(5123);

    if (__PLATFORM__ === 'desktop') {
        return <div>ISDESKTOPPLATFORM</div>
    }

    if (__PLATFORM__ === 'mobile') {
        return <div>ISMOBILEPLATFORM</div>
    }

    if (__ENV__ === 'development') {
        // addDevtools()
    } */

    return (
        <div data-testid={'App.DataTestId'}>
            <h1 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img width={100} height={100} src={avatarPng} alt={'avatar'}/>
                <img width={100} height={100} src={avatarJpg} alt={'avatarPlaceholder'}/>
            </div>
            <div>
                <AvatarSvg className={classes.icon} width={70} height={70} fill={'red'}/>
            </div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}>
                <span>inc</span>
            </button>
            <h1 className={classes.value}>{counter}</h1>
            <button className={classes.button} onClick={incrementFromRedux}>
                <span>incRedux</span>
            </button>
            <Content />
            <Outlet/>
        </div>
    );
};