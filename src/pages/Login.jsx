import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Login = ({ handleLogin }) => {
  const [isRegistering, setRegistering] = useState(false);

  
  const getUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
  };

  
  const hashPassword = (password) => {
    
    return password;
  };

  
  const handleRegister = (email, password) => {
    
    const hashedPassword = hashPassword(password);

    
    const newUser = { id: Date.now(), email: email, password: hashedPassword };
    localStorage.setItem("users", JSON.stringify([...getUsers(), newUser]));

    
    handleLogin(newUser);
  };

  
  const handleLoginUser = (email, password) => {
    
    const users = getUsers();
    const matchingUser = users.find((u) => u.email === email && u.password === hashPassword(password));

    if (matchingUser) {
      
      handleLogin(matchingUser);
    } else {
      
      alert('Invalid email or password. Please try again.');
    }
  };

  const handleRegisterClick = () => {
    setRegistering(true);
  };

  if (isRegistering) {
    return (
      <div>
        <h1>Register</h1>
        <RegisterForm handleRegister={handleRegister} />
      </div>
    );
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm handleLogin={handleLoginUser} />
      <hr />
      <p>Sayfayı tam deneyimlemek için örnek bir gmail ve şifre ile kayıt olabilirsiniz.(örnek; deneme@gmail.com password:1234)</p>
      <p>Don't have an account?<button onClick={handleRegisterClick}>Register</button></p>
    </div>
  );
};

export default Login;