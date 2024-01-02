import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../Components/Headers';

const MainLyout = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLyout;