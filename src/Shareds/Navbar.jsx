import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";

const Navbar = () => {
const {logout,user}=useContext(AuthContext)

const handleLogout=()=>{
  logout()
  .then(()=>{
   
console.log('log outed');
  })
  .catch(error=>{
    console.error(error)
  })
}
  const items =<> 
  <NavLink to={'/'}>Home</NavLink>
  <NavLink to={'/about'}>About</NavLink>
  <NavLink to={'/services'}>Services</NavLink>
  <NavLink to={'/blog'}>Blog</NavLink>
  <NavLink to={'/contact'}>Contact</NavLink>

  {user?.email ? <>  <NavLink to={'/bookings'}>Bookings</NavLink>  <button className="
 font bold md:ml-10 text-orange-500" onClick={handleLogout}>Logout</button></> :  <NavLink className="text-xl md:ml-10 text-orange-500" to={'/login'}>signin</NavLink>}
        
              </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {items }
      </ul>
    </div>
    <Link className="btn btn-ghost text-xl"><img className="md:h-12 h-8 w-8" src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu space-x-3 font-semibold menu-horizontal px-1">
      {items }
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn  ">Appoinment</button>
  </div>
</div>
    );
};

export default Navbar;