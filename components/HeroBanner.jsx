import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className=" ">{heroBanner.smallText}</p>
        <h3 className="text-6xl font-bold pt-4">{heroBanner.midText}</h3>
       
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          <Link href={`/`}>
            <button className="bg-green-600 px-3 py-2 rounded-xl text-white font-bold">
              {heroBanner.buttonText}
            </button>
          </Link>
          <div className="desc">
            <h5 className="text-xl">Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
