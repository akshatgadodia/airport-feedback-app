import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import NavigationBar from "./Components/NavigationBar";
import Feedback from "./Pages/Feedback" 
import FeedbackPage from "./Pages/FeedbackPage";

function App() {
  return (
    <BrowserRouter>
    <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/feedback/:feedbackType/:question" element={<FeedbackPage/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
