import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";


const MyApp = ({ Component, pageProps }) => {
    const [user] = useAuthState(auth);

    return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
