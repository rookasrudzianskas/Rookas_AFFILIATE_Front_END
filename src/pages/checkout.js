import React, {useEffect} from 'react';
import Header from "../components/Header";
import Image from "next/image";
import {selectItems, selectTotal} from "../slices/basketSlice";
import {useSelector} from "react-redux";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import {useRouter} from "next/router";
import {loadStripe} from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe(process.env.stripe_public_key);

const Checkout = () => {
    const items = useSelector(selectItems);
    const [user, loading] = useAuthState(auth);
    const itemsNumber = `${items.length ? items.length : "empty"}`;
    const email = `${user?.email ? user.email : "guest is here 🙂"}`;
    let something = `${itemsNumber >= 2 ? "items)." : "item)."}`;
    const total = useSelector(selectTotal);
    const router = useRouter();

    const createCheckoutSession = async () => {
        // session initialization
        // this will pull in the stripe in here
        const stripe = await stripePromise;

        // pull the backed to create the checkout session
        /// await for axis to make the post request
        // then we make the request to this url, the post requsts, we just go to the backend, here the backend fires
        // in the object we pass the data which must go back to the backend
        const checkoutSession = await axios.post('/api/create-checkout-session', {
            items: items,
            email: user.email
        });

        // redirect user/customer to checkout
        const result = await stripe.redirectToCheckout({
            // here we redirect the user, then the successful id returns
            // to the checkout page in here
            // id comes back in data variable
            // redirects to the checkout
            sessionId: checkoutSession.data.id,

        });

        /// it makes the request to our backend, creates a checkout session in here, with the products, and gets back in here with the data
        // the front end redirects to the checkout page, if everything is well!

        if(result.error) {
            // if there was an erorr in checkout result
            alert(result.error.message);
        }

    };

    console.log(something)
    return (
        <div className="bg-gray-100">
            <Header />

            <main className="lg:flex max-w-screen-2xl mx-auto">
            {/*    left */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image
                        src="https://links.papareact.com/ikj"
                        width={1200}
                        height={250}
                        objectFit="contain"
                    />

                    <div className="flex flex-col p-5 space-y-10 bg-white shadow-md">
                        <h1 className="text-3xl border-b pb-4">{items.length === 0 ? `${email} your Amazon basket is empty 🛍️` : `${email} your Amazon shopping basket has ( ${itemsNumber} ${something}`}</h1>
                        {items.length === 0 && (
                            <button onClick={() => router.push("/")} className="button px-30  shadow-md">Go back shopping 👉</button>

                        )}

                        {items.map((item, i) => (
                            <CheckoutProduct
                                key={i}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                rating={item.rating}
                                hasPrime={item.hasPrime}
                            />
                        ))}
                    </div>

                </div>

            {/*    right*/}
                {items.length >= 1 ? (
                <div className="flex flex-col bg-white p-10shadow-xl">
                    {items.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap pt-5 mx-10 mb-3">Subtotal ({items.length} items):{" "}
                                <span className="font-bold">
                                    <Currency quantity={total} cur="USD" />
                                </span>
                            </h2>
                            <button onClick={createCheckoutSession} role="link" disabled={!user} className={`button mt-2  mx-10 mt-3  ${!user && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed focus:ring-0'} `}>
                                {!user ? "Sign in to check out 🌶️" : "Proceed to check out 🛒"}
                            </button>
                        </>
                    )}
                </div>
                    ) : (
                    <div className="flex flex-col bg-white p-10shadow-xl">
                        {items.length ===  0 && (
                        <>
                            <h2 className=" font-bold whitespace-nowrap pt-5 mx-10 mb-3">There are no items in the basket
                             </h2>
                                 <button onClick={() => router.push("/")} className={`button mx-10 mt-3 ${!user && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-pointer focus:ring-0'} `}>
                 {               !user ? "Sign in to continue shopping 🌶️" : "Proceed shopping in Amazon 🛒"}
                                 </button>
                            </>
                        )}
                    </div>
                    )}
            </main>
        </div>
    );
};

export default Checkout;
      