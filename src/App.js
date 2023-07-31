import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CartList from "./components/CartList/CartList";
import Notification from "./components/Notifications/Notification";
import Profile from "./components/Profile/Profile";
import Menu from "./components/Menu/Menu";
import { ApiDataProvider } from "./context/ApiDataContext";
import { GoogleProvider } from "./context/googleContext";
import { CartProvider } from "./context/CartContext";
import SearchList from "./components/SearchList/SearchList";
import Logo from "./components/Logo";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="app">
      <GoogleProvider>
        <ApiDataProvider>
          <CartProvider>
            <Router>
              <Navbar />
              <div className="p-2 md:ml-20">
                <Logo/>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/wish-list" element={<CartList />} />
                  <Route path="/notification" element={<Notification />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/search-list" element={<SearchList />} />
                </Routes>
              </div>
            </Router>
           <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
          </CartProvider>
        </ApiDataProvider>
      </GoogleProvider>
    </div>
  );
}

export default App;
