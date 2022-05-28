import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadPhotos} from "../redux/photos";


import style from './all-cats.module.scss'
import CatImg from "./CatImg";

const AllCats = () => {
    const dispatch = useDispatch();
    const cats = useSelector(state => state.photos.photos.filter(item => item.image?.id))

    useEffect(() => {
        dispatch(loadPhotos())
    }, []);

    return (
        <div className={style.wrapper}>
            {cats.map((item, index) =>
                <div className={style.relative}>
                    <div className={style.imageWrap} key={item.id}>
                        <img src={item.image?.url}/>

                        <CatImg item={item} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllCats;