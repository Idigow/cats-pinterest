import React, {useEffect, useState} from 'react';
import style from "./all-cats.module.scss";
import like1 from "../img/Vector1.svg";
import like from "../img/Vector.svg";
import like2 from  "../img/Vector2.svg"
import {useDispatch, useSelector} from "react-redux";

const CatImg = ({item}) => {

    const favorite = useSelector(state => state.favorites.favorites.filter(cat => cat.image.id === item.image.id));
    console.log(favorite[0])
    const dipatch = useDispatch();
    const [show, setShow] = useState({
        onMouse: false,
        onClick: !!favorite[0]
    });
    const toggle = () =>{
        setShow({
            ...show,
            onMouse: !show.onMouse
        })
    }

    const handleAdd = () =>{
        setShow({
            ...show,
            onClick: true
        })
        dipatch({
            type: 'photos/adding/favorite',
            payload: item
        })
    }
    const handleDelete = () =>{
        setShow({
            ...show,
            onClick: false
        })
        dipatch({
            type: 'photos/deleting/favorite',
            payload: item
        })
    }

    return (
        <div onMouseOver={toggle} onMouseOut={toggle}  className={style.like}>
            <img src={show.onMouse ? like1 : like} onClick={handleAdd} hidden={show.onClick} alt=""/>
            <img src={like2} hidden={!show.onClick} onClick={handleDelete} alt=""/>
        </div>
    );
};

export default CatImg;