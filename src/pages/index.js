import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollection} from "react-firebase-hooks/firestore";
import {useRouter} from "next/router";
import {auth} from "../../firebase";
import firebase from "firebase";


export default function Home({products}) {
    console.log(products);
    const router = useRouter();
    const [user] = useAuthState(auth);

    console.log(user);


  return (

    //   {!user ? (
    //       router.push("/login")
    // ) : (
    //

    <div className="bg-gray-100">
      <Head>
        <title>Amazon App || Rookas Rudzianskas</title>
        <link href="https://iconape.com/wp-content/files/mk/33892/svg/amazon-icon-1.svg" rel="icon" type="image/icon" />
        </Head>

      {/* Header */}
      <Header/>

        <main className="max-w-screen-2xl mx-auto">

            <Banner />
        {/*    Banner   */}


        {/*    Product feed */}
            <ProductFeed products={products} />
        </main>


    </div>
    // )}
  );
}

export async function getServerSideProps(context) {
    // get products
    const products = await fetch("https://fakestoreapi.com/products").then((res) => res.json());
    // const user = firebase.auth.onAuthStateChanged(something => something);
    // console.log("This is user here", user);

    return {
        props: {
            products: products,
        }
    }

}

// GET ___ https://fakestoreapi.com/products
