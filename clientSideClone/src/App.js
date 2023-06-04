import {GoogleOAuthProvider} from '@react-oauth/google';
import AccountProvider from "./contexts/AccountProvider";
import Messanger from './Components/Messanger'


function App() {
  const clientId='733813976468-2qb72820r524f0avpn2gbs4n0b3n25dl.apps.googleusercontent.com';
  return (
    
    <GoogleOAuthProvider clientId={clientId}>
    <AccountProvider>
    <Messanger />
    </AccountProvider>
    </GoogleOAuthProvider>

    
  );
}

export default App;
