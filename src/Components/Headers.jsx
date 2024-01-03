import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviders';

const Headers = () => {
    const {user,logout}=useContext(AuthContext)
    const handlilogOut=()=>{
        logout()
        .then(()=>{})
        .catch(error=>console.log(error))
    }

    return (
        <div className='bg-gray-700 text-white rounded-xl my-3 py-2'>
           
            <Link  to='/' className='text-2xl text-blue-500 mr-2'>Home</Link>
           {user && <Link  to='/orders' className='text-2xl text-blue-500 mr-2'>Orders</Link>}
            <Link to='/gallery' className='text-2xl text-blue-500 mr-2'>Gallery</Link>
            <Link to='/register' className='text-2xl text-blue-500 mr-2'>Register</Link>
        
          
                {
                    user ? <>
                    <span>{user.email}</span> 
                   <button onClick={handlilogOut} className="btn btn-xs">Sign Out</button>
                    </>
                    :
                    <>
                    <Link to='/signin' className='text-xl text-blue-500 mr-2'>Login</Link>
                     </>
                }
           
        </div>
    );
};

export default Headers;