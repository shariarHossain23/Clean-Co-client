import React from "react";
import banner from '../../assets/bucketgirl 1.png';

const Banner = () => {
  return (
    <div>
      <div class="hero h-screen lg:h-[60vh] bg-accent  z-10 relative lg:px-20 ">
        <div class="hero-content flex-col lg:flex-row">
        <div className="">
            <p>Best Quality</p>
            <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
          <div className="h-[60vh] shrink-0 ">
          <img
            src={banner}
            class="h-full"
            alt=""
          />
          </div>
        </div>
      </div>
      <div className=" shadow-lg mx-auto rounded-lg mt-[-30px] z-20 w-5/6 bg-base-200 p-10 relative">
          <h1 className="text-2xl text-primary mb-4">Get Free Estimate</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <button className="btn btn-primary w-full max-w-xs">Request a quote</button>
          </div>
      </div>
    </div>
  );
};

export default Banner;
