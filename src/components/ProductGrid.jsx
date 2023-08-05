import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsEyeSlashFill } from "react-icons/bs";
import profiles from "../assets/profile-1.png";
import thumbnail from "../assets/picture-1.png";
const ProductGrid = () => {
  let arrayOfDribbbles = [
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
    {
      thumbnail,
      author: "Sok Studio",
      profiles,
    },
  ];
  return (
    <div className="product-grid">
      {arrayOfDribbbles.map((element, id) => {
        return (
          <div key={id}>
            <img src={element.thumbnail} alt="" className="rounded-[30px]" />
            <div className="flex justify-between mt-2">
              <div className="flex gap-2 items-center">
                <img src={element.profiles} alt="" className="rounded-full" />
                <p className="font-bold">{element.author}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-2 items-center">
                  <span className="text-gray-600 hover:text-[#FBA1B7] cursor-pointer">
                    <AiFillHeart
                    />
                  </span>

                  <span>275</span>
                </div>
                <div className="flex gap-2 items-center">
                  <BsEyeSlashFill style={{ color: "gray" }} />
                  <span>4.3k</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductGrid;
