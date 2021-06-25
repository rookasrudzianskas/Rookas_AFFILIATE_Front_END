import Image from "next/image";
import React, {useState} from 'react';
import {auth, provider} from "../../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import Head from "next/head";


function Login() {
    const [user] = useAuthState(auth);
    const router = useRouter();

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error));

        router.push("/");

    }



    return (

        <div className="grid place-items-center mt-10">
<center>
            <div className="p-40">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <Image
                        loading="lazy"
                        src='https://kfinancial.com/wp-content/uploads/2019/02/amazon-logo-vector-png-vector-png-free-amazon-logos-705.jpg'
                        width={800}
                        height={150}
                        objectFit="contain"
                        className="cursor-pointer "
                    />
                    <div className="px-6 py-4">
                        <h1
                            className="p-5 bg-amazon_blue rounded-full text-white text-center cursor-pointer"
                            onClick={signIn}
                        >

                            Login with Google
                        </h1>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#login</span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#google</span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#amazon</span>
                    </div>
                </div>
            </div>
            </center>




        </div>
    );
}

export default Login;