import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProviders';

const Home = () => {
    const user=useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <h1>Home page</h1>
        </div>
    );
};

export default Home;