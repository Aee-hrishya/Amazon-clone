import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './Pages/Signin';

//firebase
import firebaseConfig from './config/firebaseConfig';
import { initializeApp } from "firebase/app";

//Init firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <>
    <Router>
    <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      
    </Router>
    
    </>
  );
}

export default App;
