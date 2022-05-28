import React from 'react';
import Header from "./header/Header";
import {Route, Routes} from "react-router-dom";
import AllCats from "./all-cats/AllCats";
import FavoriteCats from "./favorite-cats/FavoriteCats";

const Content = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<AllCats/>}/>
                <Route path="/favorites" element={<FavoriteCats/>}/>
            </Routes>
        </>
    );
};

export default Content;