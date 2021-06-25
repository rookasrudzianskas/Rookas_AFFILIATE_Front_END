import React, {useEffect} from 'react';
import Image from 'next/image'
import{MenuIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline";
import {useRouter} from "next/router";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";
import {useSelector} from "react-redux";
import {selectItems} from "../slices/basketSlice";

function Header() {

    const router = useRouter();
    const [user, loading] = useAuthState(auth);
    const items = useSelector(selectItems);
    // console.log(items);

    const handleAuthentication = () => {
        if(!user) {
            router.push("/login");
        } else {
            auth.signOut();
            // router.push("/");
        }
    }

    return (
        <>
            <header className="header">
                {/* Top nav */}
                <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                    <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                        <Image
                            onClick={() => router.push("/")}
                            loading="lazy"
                            src='https://links.papareact.com/f90'
                            width={150}
                            height={40}
                            objectFit="contain"
                            className="cursor-pointer"
                        />
                    </div>

                    <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400  transition duration-150 hover:bg-yellow-500 cursor-pointer">
                        <input className="pl-3 p-2 w-6 h-full flex-grow rounded-l-md outline-none" type="text"/>
                        <SearchIcon className="h-12 p-4" />
                    </div>

                {/*    Right side*/}
                    <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                        <img src={user ? user.photoURL : 'https://toppng.com/uploads/preview/file-svg-user-icon-material-desi-11563317072p2p27gjccw.png'} alt="profileimg" className="lg:inline-flex  w-10 h-10 rounded-full mr-1 ml-1 hidden  "/>

                                <div onClick={handleAuthentication} className="link cursor-pointer">

                            <p>{user ? `Hello, ${user.email}` : "Sign in guest 🚀"}</p>
                            <p className="font-extrabold md:text-sm">Account & Lists</p>
                        </div>
                        <div onClick={() => router.push('/orders')} className="link">
                            <p>Returns</p>
                            <p className="font-extrabold md:text-sm">& Orders</p>
                        </div>
                        <div onClick={ () =>router.push('/checkout') } className="relative link flex items-center">
                            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{items.length}</span>
                            <ShoppingCartIcon className="h-10" />
                            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
                {/*    Bottom */}
                    <p className="link flex items-center">
                        <MenuIcon className="h-6 mr-1" />
                        All
                    </p>

                    <p className="link">Prime Video</p>
                    <p className="link">Amazon Business</p>
                    <p className="link">Today's Deals</p>

                    <p className="link hidden lg:inline-flex">Electronics</p>
                    <p className="link hidden lg:inline-flex">Food & Grocery</p>
                    <p className="link hidden lg:inline-flex">Prime</p>
                    <p className="link hidden lg:inline-flex">Buy Again</p>
                    <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                    <p className="link hidden lg:inline-flex">Health & Personal Care</p>
                </div>

            </header>
        </>
    );
}

export default Header;