import React from 'react';
import style from './header.module.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.wrapper}>
                <button className={style.btn}>
                    <NavLink className={style.navLink} style={({isActive}) => ({backgroundColor: isActive? '#1E88E5' : '#2196F3'})} to="/">
                        Все котики
                    </NavLink>
                </button>
                <button className={style.btn}>
                    <NavLink className={style.navLink} style={({isActive}) => ({backgroundColor: isActive? '#1E88E5' : '#2196F3'})} to="/favorites">
                        Любимые котики
                    </NavLink>
                </button>
            </div>
        </div>
    );
};

export default Header;