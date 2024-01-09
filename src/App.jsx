import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SiteRoutes from "./SiteRoutes";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')) ?? null);
  }, []);

  const handleLogin = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    navigate('/');
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  }

  const handleRegister = (email, password) => {
    const newUser = { id: Date.now(), email: email }; 
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    navigate('/');
  }

  return (
    <>
      <Navbar handleLogout={handleLogout} user={user}/>
      <div className="body">
        <div className="container">
          <div className="col-sm-12">
            <SiteRoutes handleLogin={handleLogin} handleRegister={handleRegister} user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;