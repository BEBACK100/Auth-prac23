import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviders';

const Signin = () => {
    const {user,signIn}=useContext(AuthContext)
    const handleSingin=event=>{
        event.preventDefault()
        const form=event.target;
       
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            const loggeduser=result.user;
            console.log(loggeduser);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
             <form onSubmit={handleSingin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <h1>If you are new please <Link to='/register' className='text-2xl text-green-700'>Register First</Link></h1>
      </form>
        </div>
    );
};

export default Signin;