import { useDispatch, useSelector } from "react-redux";
import CakeView from "./features/cake/CakeView";
import "./App.css";
import IcecreamView from "./features/icecream/IcecreamView";
import UserView from "./features/user/UserView";

CakeView;
function App() {
  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;
