import React from "react";
import { client, urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ product, products }) => {
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const { image, name, details, price } = product;

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className=" flex-wrap md:flex space-x-10 m-10 mt-15 justify-center items-center">
          <div className="image-container">
            <img
              src={urlFor(image && image[0])}
              className="rounded-3xl w-[350px] w-[350px] md:w-[400px] md:h-[400px] scale-105 duration-300"
            />
          </div>
          <div className="mt-10">
            <h1>{name}</h1>
            <div className="flex items-center space-x-3 text-center ju">
              <div className="text-[#f02d34] mt-3 flex space-x-2 text-center ">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p className="text-[#324d67] mt-0]">(20)</p>
            </div>
            <h4 className="font-bold py-2 text-xl">Details</h4>
            <p>{details}</p>
            <p className="font-semibold text-red-500">Ksh{price}</p>
            <div className="space-x-2 flex">
              <h3>Quantity:</h3>
              <p className="flex space-x-3 items-center  ">
                <span
                  onClick={decQty}
                  className="bg-red-500 p-3 cursor-pointer  text-xl font-bold"
                >
                  <AiOutlineMinus />
                </span>
                <span className="text-2xl font-semibold">{qty}</span>
                <span
                  onClick={incQty}
                  className="bg-green-500 p-3 cursor-pointer text-xl font-bold"
                >
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className="flex space-x-7 mt-4">
              <button
                type="button"
                onClick={() => onAdd(product, qty)}
                className="px-3 py-2  border-solid border-red-600 border rounded-2xl cursor-pointer  hover:scale-105 duration-300"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="bg-red-500 px-3 py-2 text-white rounded-2xl hover:scale-105 duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center flex flex-col">
        <h2 className="text-3xl py-4 font-bold italic">You may also like</h2>
        <div className="">
          <div className="flex flex-wrap space-x-3 justify-center items-center  ">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
