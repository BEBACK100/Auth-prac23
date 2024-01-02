import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProviders';
import { Link } from 'react-router-dom';

const Register = () => {
    const {user,createUser}=useContext(AuthContext)
    console.log(createUser);
    const handleRegister=event=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password);
        createUser(email,password)
        .then(result=>{
            const loggedUser=result.user
            console.log(loggedUser);
            form.reset()
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
           <div className="hero min-h-screen bg-gray-300">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
       <h1>Aldeary you have an account <Link to='/signin' className='text-2xl text-green-700'>Login</Link></h1>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;