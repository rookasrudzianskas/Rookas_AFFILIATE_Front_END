import React, {useState} from 'react';
import Image from "next/image";
import {StarIcon} from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket} from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({id, title, price, description, category, image}) => {

    const dispatch = useDispatch();

    // random number for rating in here
    const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
    // prime shiit in here
    const [hasPrime] = useState(Math.random() < 0.5);

    const addItemToBasket = () => {
        // constructing the product
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
            rating,
            hasPrime,
        };
        // sending the product object to the redcuer the data layer
        dispatch(addToBasket(product));
    }

    return (
        // <div className="transition duration-500 hover:scale-125">
        <div className="scaling cursor-pointer  transition duration-250 hover:shadow-xl relative flex flex-col m-5 z-50 bg-white p-8  rounded-lg">
            <p className="absolute top-2 right-2 p-1 rounded text-xs text-gray-600 bg-yellow-400  z-30">{category}</p>
            {/*<div className="productImagewrapper rounded-lg mt-3">*/}
            <Image src={image} height={200} width={200} objectFit="contain" className="productImage p-10 transform h-64 w-1/5 transition duration-500 hover:scale-95" />
            {/*</div>*/}

            <h4 className="my-3">{title}</h4>
            <div className="flex">
                {Array(rating).fill().map((_, i) => (
                    <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>

            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5">
                <Currency
                    quantity={price}
                    currency="USD"
                />
            </div>

            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt=""/>
                    <p className="text-xs text-gray-500">Free Next-day Delivery</p>
                </div>
            )}

            <button onClick={addItemToBasket} className="ml-3 button">Add To Basket</button>
        </div>
        // </div>
    );
};

export default Product;
