import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import { store } from "./store";
import HookCakeContainer from "./components/HookCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
