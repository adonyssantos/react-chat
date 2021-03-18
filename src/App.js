import { Channel, Login, Header } from "./components/";
import { useAuthState } from "./hooks";
import { firebase } from "./config/firebase";
import './App.css';
import renderLoading from './functions/renderLoading';
import fixSroll from './functions/fixSroll';


function App() {
  const { itializing, user } = useAuthState(firebase.auth());
  return (
    <div>
      {renderLoading(itializing)}
      {user ? (
        <>
          <Header />
          <Channel user={user} />
          {fixSroll()}
        </>
      ) : (
        <>
          <Header />
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
