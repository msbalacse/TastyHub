import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import WishList from "./components/WishList/WishList";
import Notification from "./components/Notifications/Notification";
import Profile from "./components/Profile/Profile";
import Menu from "./components/Menu/Menu";
import { ApiDataProvider } from "./context/ApiDataContext";

function App() {
  return (
    <div className="app">
      <ApiDataProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wish-list" element={<WishList />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </Router>
      </ApiDataProvider>
    </div>
  );
}

export default App;
