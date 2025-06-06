import Navbar from "./components/navbar";
import Carsoul from "./components/carsoul";
import Cart from "./components/cart";
import Collection from "./components/collection";
import Footer from "./components/Footer";
// import Register from "./components/register";
import './App.css'
function App() {
  return (
    <div className="App">
       <Navbar/>
       {/* <Carsoul/> */}
       <Cart/>
       <Collection/>
       {/* <Register/> */}
       {/* <Footer/> */}
       
    </div>
  );
}

export default App;
