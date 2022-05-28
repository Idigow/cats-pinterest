import React from 'react';
import {useSelector} from "react-redux";
import style from "../all-cats/all-cats.module.scss";
import CatImg from "../all-cats/CatImg";

const FavoriteCats = () => {
    const favorites = useSelector(state => state.favorites.favorites)
    return (
        <div className={style.wrapper}>
            {favorites.map((item, index) =>
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

export default FavoriteCats;