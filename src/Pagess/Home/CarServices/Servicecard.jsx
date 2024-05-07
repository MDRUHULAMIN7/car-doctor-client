import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Servicecard = ({service}) => {

    const{img,price,title,service_id}=service;
    console.log(service);
    return (
        <div className="  bg-base-100 shadow-xl">
            <div className="h-2/3">
            <img src={img}alt="Shoes" className="w-full h-full px-5 pt-4" />
            </div>
       
        <div className="card-body  h-1/3">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between">
          <p className="text-orange-500">price:{price}$</p> <Link to={`/checkout/${service_id}`}><button className=" "><FaArrowRight></FaArrowRight></button></Link>
          </div>
       
          
        </div>
      </div>
    );
};

export default Servicecard;