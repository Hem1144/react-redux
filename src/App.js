import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./store";
import HookCakeContainer from "./components/HookCakeContainer";
import IcecreamContainer from "./components/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookCakeContainer />
        <CakeContainer />
        <IcecreamContainer />
      </div>
    </Provider>
  );
}

export default App;
