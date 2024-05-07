import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import login from "../../../assets/images/login/login.svg";
// import { useContext } from "react";
// import { AuthContext } from "../../../Providers/Authprovider";
import axios from "axios";
import useAuth from "../../../Hook/useAuth";

const Login = () => {
  // const { setUser, signin } = useContext(AuthContext);
  const { setUser, signin } = useAuth()

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { email, password };
    console.log(user);
    signin(email, password)
      .then((result) => {
        setUser(result.user);
        const loggedUser = result.user;
        console.log(loggedUser);
        const user = { email };

        axios.post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then(res => {
            console.log(res.data);
            if (res.data.success) {
              alert("Login succesfully");
              navigate(location?.state ? location?.state : "/");
            }
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="h-5/6">
      <div className="mx-5 md:mx-10 h-full  ">
        <div className="hero-content flex-col lg:flex-row justify-between">
          <div className="text-center lg:text-left">
            <img src={login} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm border-2 border-base-300 rounded-none bg-base-100">
            <h1 className="text-3xl font-bold text-center mt-2">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div></div>
            <p className="text-center m-3">
              New To Cars-Doctor
              <Link to={"/signup"} className="ml-3 text-accent font-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
