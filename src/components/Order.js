import React from 'react';
import {useSelector} from "react-redux";
import {selectItems} from "../slices/basketSlice";
import moment from "moment";
import Currency from "react-currency-formatter";

const Order = ({ id, title, price, description, category, image, rating, hasPrime }) => {

    const items = useSelector(selectItems);


    return (
        <div className="relative border rounded-md">
            <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
                <div>
                    <p className="font-bold text-xs">ORDER PLACED</p>
                    <p>22 May 2021</p>
                </div>

                <div>
                    <p className="text-xs font-bold">TOTAL</p>

                    <p>$1323.34 - Next-Day Delivery $6.99</p>
                </div>

                <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">1 item</p>

                <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-sm whitespace-nowrap">ORDER NUMBER #594839d9fsd8f938429</p>
            </div>

            <div className="p-5 sm:p-10">
                <div className="flex space-x-6 overflow-x-auto">
                    <img className="h-20 s=object-contain sm:h-32" src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Order;
