


import pic1 from "../../../assets/images/banner/1.jpg"
import pic2 from "../../../assets/images/banner/2.jpg"
import pic3 from "../../../assets/images/banner/3.jpg"
import pic4 from "../../../assets/images/banner/4.jpg"


const Banner = () => {
  return (
    <div className="carousel w-full h-[80vh] mt-10">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src={pic1}
          className="w-full rounded-xl"
        />
        <div className="absolute flex h-full justify-end gap-5  px-5 bg-cover bg-gradient-to-rfrom-[#151515] to-[rgba(21,21,21,0)] transform rounded-xl   pt-10 ">
            <div className="text-xl   text-white w-1/2 space-y-3">
                <h1 className="lg:text-7xl text-3xl md:text-4xl font-bold">Affordable Price For Car Servicing</h1>
<p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
<div className="space-x-2 space-y-2"><button className="text-white bg-[#ff3811]  px-3 py-2">Discover More</button>
<button className="text-white px-3 py-2 bg-transparent border-2  border-base-200">Latest Project</button></div>

            </div>
            <div className="flex gap-5 justify-end w-1/2 mt-96">
            <a href="#slide4" className="btn btn-circle bg-red-500">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-red-500">
            ❯
          </a>
            </div>
        
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full ">
        <img
          src={pic2}
          className="w-full rounded-xl"
        />
        <div className="absolute flex h-full justify-end gap-5 bg-gradient-to-r px-5 bg-cover from-[#151515] to-[rgba(21,21,21,0)] transform rounded-xl   pt-10 ">
            <div className="text-xl   text-white w-1/2 space-y-3">
                <h1 className="lg:text-7xl text-3xl md:text-4xl font-bold">Affordable Price For Car Servicing</h1>
<p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
<div className="space-x-2 space-y-2"><button className="text-white bg-[#ff3811]  px-3 py-2">Discover More</button>
<button className="text-white px-3 py-2 bg-transparent border-2  border-base-200">Latest Project</button></div>

            </div>
            <div className="flex gap-5 justify-end w-1/2 mt-96">
            <a href="#slide1" className="btn btn-circle bg-red-500">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-red-500">
            ❯
          </a>
            </div>
        
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full ">
        <img
          src={pic3}
          className="w-full rounded-xl"
        />
        <div className="absolute flex h-full justify-end gap-5 bg-gradient-to-r px-5 bg-cover from-[#151515] to-[rgba(21,21,21,0)] transform  rounded-xl  pt-10 ">
            <div className="text-xl   text-white w-1/2 space-y-3">
                <h1 className="lg:text-7xl text-3xl md:text-4xl font-bold">Affordable Price For Car Servicing</h1>
<p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
<div className="space-x-2 space-y-2"><button className="text-white bg-[#ff3811]  px-3 py-2">Discover More</button>
<button className="text-white px-3 py-2 bg-transparent border-2  border-base-200">Latest Project</button></div>

            </div>
            <div className="flex gap-5 justify-end w-1/2 mt-96">
            <a href="#slide2" className="btn btn-circle bg-red-500">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-red-500">
            ❯
          </a>
            </div>
        
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full ">
        <img
          src={pic4}
          className="w-full rounded-xl"
        />
        <div className="absolute flex h-full justify-end gap-5 bg-gradient-to-r px-5 bg-cover from-[#151515] to-[rgba(21,21,21,0)] transform rounded-xl    pt-10 ">
            <div className="text-xl   text-white w-1/2 space-y-3">
                <h1 className="lg:text-7xl text-3xl md:text-4xl font-bold">Affordable Price For Car Servicing</h1>
<p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
<div className="space-x-2 space-y-2"><button className="text-white bg-[#ff3811]  px-3 py-2">Discover More</button>
<button className="text-white px-3 py-2 bg-transparent border-2  border-base-200">Latest Project</button></div>

            </div>
            <div className="flex gap-5 justify-end w-1/2 mt-96">
            <a href="#slide3" className="btn btn-circle bg-red-500">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-red-500">
            ❯
          </a>
            </div>
        
        </div>
      </div>
     
     
     
    
    
    </div>
  );
};

export default Banner;
