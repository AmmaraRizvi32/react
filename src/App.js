import "./App.css";
// import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
// import Form from "./Components/Form";
import Footer from './Components/Footer'
import Homelast from "./Components/Homelast";
function App() {
  return (
    <div>
      <Navbar title="Nutrals" />
      {/* <Home /> */}
      
      <Homelast />
      <Footer />
    </div>
  );
}

export default App;
