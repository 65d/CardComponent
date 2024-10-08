"use client";
import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import ProductCardSwitch from "../ProductCardSwitch/ProductCardSwitch";
import BuyButton from "../BuyButton/BuyButton";
// import HeartIcon from ".././assets/heart.svg";
interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard = ({ title, price, image }: ProductCardProps) => {
  return (
    <div className={`shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] flex flex-col w-96 bg-white h-128 p-4 ${styles.container} relative transition-all duration-300 hover:shadow-xl hover:shadow-gray-500 hover:z-50`}>
      <div className={`w-full h-96 ${styles.imageContainer} relative flex-grow`}>
        <div className="absolute top-2 left-2 bg-white z-10 p-1.5 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-300">
            <Image src={'/assets/heart.svg'} alt="Heart Icon" width={23} height={23} />
        </div>
        <Image
          src={image}
          alt="Product"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={ `${styles.contentContainer} text-gray-700 pt-3`}>
        <h1 className={`flex `}>
            <span className="text-base w-3/4">{title}</span>
            <span className="text-base w-1/4 font-bold text-right">{price}€</span>
        </h1>
        <ProductCardSwitch />
        <BuyButton />
      </div>
    </div>
  );
};

export default ProductCard;
