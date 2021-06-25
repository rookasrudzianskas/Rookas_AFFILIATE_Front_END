import React from 'react';
import Header from "../components/Header";
import db, {auth} from "../../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {loadStripe} from "@stripe/stripe-js";
import moment from "moment";
import * as stripe from "stripe";
import Order from "../components/Order";
import {useSelector} from "react-redux";
import {selectItems} from "../slices/basketSlice";
const stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY);

const Orders = () => {
    const items = useSelector(selectItems);
    console.log(items);
    const [user] = useAuthState(auth);
    const userDisplayName = `${user?.displayName ? user?.displayName : "Your"}`;


    // const stripeOrders = db.collection('users').doc(user.email).collection('orders').orderBy('timestamp', 'desc').get();

    // const orders = stripeOrders.docs.map(async (order) => ({
    //         id: order.id,
    //         amount: order.data().amount,
    //         amountShipping: order.data().amount_shipping,
    //         images: order.data().images,
    //         timestamp: moment(order.data().timestamp.toDate()).unix(),
    //         items: (
    //             // gets all the items in here
    //             // returs all the information, and the is mapped to the data and is in hte items
    //             await stripe.checkout.sessions.listLineItems(order.id, {
    //                 limit: 100
    //             })
    //         ).data,
    //     })
    // );


    return (
        <div>
            <Header/>
            <main className="max-w-screen-lg mx-auto p-10">
                <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">{`${userDisplayName} ${" "} Orders 👇 `} </h1>
                {user ? (
                    <h2>1 Orders</h2>
                ) : (
                    <h2>Please sign in to see your orders</h2>
                )}

                <div className="mt-5 spacy-y-4">
                    <Order />
                </div>
            </main>
        </div>
    );
};

export default Orders;


// DOES NOT WORK SERVER SIDE RENDERING BECAUSE THE AUTHENTICATION MUST BE GLOBAL PER NEXT JS. NOW
// IT IS JUST DUMMY DATA IN HERE
// possible fixes in here?!

// basically node js
export async function getServerSideProps(context) {




        const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    // Get the user logged in credentials in here
    const session = auth.user;
    console.log("This is", session);
    if(!session) {
        return {
            props: {}
        };
    }
    //will get all the ordrrs for the user
    // firebase db
    const stripeOrders = await db.collection('users').doc(await session.user.email).collection('orders').orderBy('timestamp', 'desc').get();

    // stripe orders in here
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                // gets all the items in here
                // returs all the information, and the is mapped to the data and is in hte items
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100
                })
            ).data,
        }))
    );


    return {
        props: {
            orders,
        }
    }
}







































// import React from 'react';
// import Header from "../components/Header";
// import db, {auth} from "../../firebase";
// import {useAuthState} from "react-firebase-hooks/auth";
// import firebase from "firebase";
// import moment from "moment/moment";
// import {loadStripe} from "@stripe/stripe-js";
// // const stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY);
//
// const Orders = async () => {
//
//     const [user] = useAuthState(auth);
//     // const userDisplayName = `${user?.displayName ? user?.displayName : "Your"}`;
//     // const stripeOrders = await db.collection('users').doc(user.email).collection('orders').orderBy('timestamp', 'desc').get();
//
//     // console.log(stripeOrders);
//
//     return (
//         <div>
//             <Header/>
//             {/*<main className="max-w-screen-lg mx-auto p-10">*/}
//             {/*    <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">{`${userDisplayName} ${" "} Orders 👇 `} </h1>*/}
//             {/*    {user ? (*/}
//             {/*        <h2>x Orders</h2>*/}
//             {/*    ) : (*/}
//             {/*        <h2>Please sign in to see your orders</h2>*/}
//             {/*    )}*/}
//
//             {/*    <div className="mt-5 spacy-y-4">*/}
//
//             {/*    </div>*/}
//             {/*</main>*/}
//         </div>
//     );
// };
//
// export default Orders;
//
// // basically node js
// // export async function getServerSideProps(context) {
//
//
//
//
//     //     const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
//     //
//     // // Get the user logged in credentials in here
//     // const session = auth.user;
//     // console.log("This is", session);
//     // if(!session) {
//     //     return {
//     //         props: {}
//     //     };
//     // }
//     // //will get all the ordrrs for the user
//     // // firebase db
//     // const stripeOrders = await db.collection('users').doc(await session.user.email).collection('orders').orderBy('timestamp', 'desc').get();
//     //
//     // // stripe orders in here
//     // const orders = await Promise.all(
//     //     stripeOrders.docs.map(async (order) => ({
//     //         id: order.id,
//     //         amount: order.data().amount,
//     //         amountShipping: order.data().amount_shipping,
//     //         images: order.data().images,
//     //         timestamp: moment(order.data().timestamp.toDate()).unix(),
//     //         items: (
//     //             // gets all the items in here
//     //             // returs all the information, and the is mapped to the data and is in hte items
//     //             await stripe.checkout.sessions.listLineItems(order.id, {
//     //                 limit: 100
//     //             })
//     //         ).data,
//     //     }))
//     // );
//
//     // let user = auth.onAuthStateChanged(async user => alert(user);
//     //
//     // return {
//     //     props: {
//     //         // orders,
//     //     }
//     // }
// // }
