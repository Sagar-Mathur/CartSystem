import logo from './logo.svg';
import './App.css';
import Navbar from './Header/Navbar';
import Cart from './Shopping cart/Cart';
import Addtocart from './Shopping cart/Addtocart';
import Curd from './Curd';
import Searchbar from './Searchbar';

function App() {
  return (
    <div className="App">
      {/* <Searchbar/> */}
      <Navbar/>
      <Cart/> 
      {/* <Addtocart/>  */}
     {/* <Curd/> */}
    </div>
  );
}

export default App;
