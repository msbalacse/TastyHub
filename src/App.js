import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CartList from "./components/CartList/CartList";
import Notification from "./components/Notifications/Notification";
import Profile from "./components/Profile/Profile";
import Menu from "./components/Menu/Menu";
import { ApiDataProvider } from "./context/ApiDataContext";
import { CartProvider } from "./context/CartContext";
import SearchList from "./components/SearchList/SearchList";
import Logo from "./components/Logo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./Hooks/useAuth";
import Preloader from "./components/preloader/Preloader";

function App() {
  const { user } = useAuth();

  return (
    <div className="app">
      <ApiDataProvider>
        <CartProvider>
          {user ? (
            <>
              <Router>
                <Navbar />
                <div className="p-2 md:ml-20">
                  <Logo />
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
            </>
          ) : (
            <Preloader />
          )}
        </CartProvider>
      </ApiDataProvider>
    </div>
  );
}

export default App;
