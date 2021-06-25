import React from 'react';
import Image from "next/image";
import {StarIcon} from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import {useDispatch} from "react-redux";
import {addToBasket, removeFromBasket} from "../slices/basketSlice";

const CheckoutProduct = ({ id, title, price, description, category, image, rating, hasPrime }) => {
    const dispatch = useDispatch();
    const addItemToBasket = () => {
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
        console.log(product.price)

        dispatch(addToBasket((product)));
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({price}));
        // console.log(id)
    }
    return (
        <div className=" productCard cursor:pointer grid md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 bg-white box-border p-6 rounded-lg shadow-lg">
            <Image
                src={image}
                height={200}
                width={200}
                objectFit="contain"
                className=" productImage p-10 transform h-64 w-1/5 transition duration-500 hover:scale-95 "
            />

            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                        ))}
                </div>
                <p className="text-xs mt-2 mb-2 line-clamp-3">{description}</p>

                <Currency quantity={price} currency="USD" />

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img src="https://links.papareact.com/fdw" className="w-12" loading="lazy" alt=""/>
                        <p className="text-xs text-gray-5">FREE Next-day Delivery</p>
                    </div>
                )}

            </div>

            <div>
            {/*    Right add/remove buttons*/}
                <div className="flex flex-col space-y-2 my-auto justify-center">
                    <button className="button mt-auto shadow-md" onClick={addItemToBasket}>Add to Basket</button>
                    <button className="button mt-auto shadow-md" onClick={removeItemFromBasket}>Remove from Basket</button>

                </div>
            </div>


        </div>
    );
};

export default CheckoutProduct;
