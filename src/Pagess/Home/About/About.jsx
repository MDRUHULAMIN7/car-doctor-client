 import p1 from "../../../assets/images/about_us/person.jpg"
 import p2 from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen  my-t">
  <div className="hero-content flex-col lg:flex-row">
 <div className="md:w-1/2 relative">
 <img src={p1} className="w-3/4 rounded-lg " />
 <img src={p2} className="w-2/3 rounded-lg  absolute right-3 top-1/3 border-8 border-white" />
 </div>
    <div className="md:w-1/2 md:pt-4">
        <h1 className="text-xl font-bold text-orange-500">About Us</h1>
      <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6 text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
      <p className=" text-sm">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.  </p>
      <button className="btn btn-warning rounded-none mt-4 bg-orange-500">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;