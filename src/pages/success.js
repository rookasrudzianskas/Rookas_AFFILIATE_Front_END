import React from 'react';
import Header from "../components/Header";
import {CheckCircleIcon } from "@heroicons/react/solid";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";
import {useSelector} from "react-redux";
import {selectItems} from "../slices/basketSlice";
import {useRouter} from "next/router";

const Success = () => {
    const [user] = useAuthState(auth);
    const [items] = useSelector(selectItems);
    const router = useRouter();

    return (
        <div className="bg-gray-100 h-screen shadow-2xl">
            <Header />

            <main className="productCard max-w-screen-lg mx-auto  shadow-xl">
                <div className="flex flex-col p-10 bg-white">
                    <div className="flex items-center space-x-2 mb-5">
                        <CheckCircleIcon className="text-green-500 h-10" />
                        <h1 className="text-3xl">{`Thanks ${user?.displayName ? user?.displayName : 'you'}, your order has been confirmed!`}</h1>
                    </div>

                    <p>
                        {`Thank you, ${user?.displayName ? user?.displayName : 'you'} for shopping with us. We will send a confirmation email, then the ${items?.length ? items?.length : "" } items has shipped, if you would like to check the status of order(s) please press the link below.`}
                    </p>

                    <button onClick={() => router.push("/orders")} className="button mt-8">Go to my orders</button>
                </div>
            </main>
        </div>
    );
};

export default Success;
