import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import NavigationBar from "./Components/NavigationBar";

function App() {
  return (
    <BrowserRouter>
    <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
