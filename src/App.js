import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./Components/context/AuthContext";
import Mainroutes from "./Components/Routes/MainRoutes";
function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Mainroutes />
      </div>
    </AuthContextProvider>
  );
}
export default App;
