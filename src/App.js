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

function App() {
  return (
    <div className="app">
      <ApiDataProvider>
        <GoogleProvider>
          <Router>
            <Navbar />
            <div className="p-2 md:ml-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wish-list" element={<CartList />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/menu" element={<Menu />} />
              </Routes>
            </div>
          </Router>
        </GoogleProvider>
      </ApiDataProvider>
    </div>
  );
}

export default App;
