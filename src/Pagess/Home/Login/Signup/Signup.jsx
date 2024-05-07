
import { Link } from "react-router-dom";
import login from "../../../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/Authprovider";
const Signup = () => {
  const{signup,setUser}=useContext(AuthContext)
    const handleSignup =e=>{
        e.preventDefault()
        const name =e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user={name,email,password}
        console.log(user);
        signup(email,password)
        .then(result=>{
          setUser(result.user)
          console.log(result.user);
          alert('SignUp succesfully')
        }
      
      )
      .catch(error=>{
        console.error(error)
      })
    }
    return (
        <div className="h-5/6 ">
          
        <div className=" px-5 h-full">
<div className="h-full md:flex mt-5 mb-4 justify-between">
<div className="text-center lg:text-left">
 
  <img src={login} alt="" />
  
</div>
<div className="card  w-full max-w-sm border-2 border-base-300 rounded-none bg-base-100">
<h1 className="text-3xl font-bold text-center mt-2">SignUp</h1>
  <form onSubmit={handleSignup} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name="name" placeholder="name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="email" name="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" name="password" className="input input-bordered" required />
     
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">SigUp</button>
    </div>
  </form>
  <div>

  </div>
  <p className="text-center m-3">Have an account<Link to={'/login'} className="ml-3 text-accent font-bold">Login</Link></p>
</div>
</div>
</div>
    </div>
    );
};

export default Signup;