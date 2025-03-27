import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className="body-wrapper">
      <Container id="container" className={`login-container ${isActive ? 'active' : ''}`}>
        {/* Sign Up Form */}
        <div className="form-container sign-up">
          <Form>
            <h1 style={{color: "#8F4111"}}>Create Account</h1>
            <Form.Control type="text" placeholder="Name" className="mb-2" />
            <Form.Control type="email" placeholder="Email" className="mb-2" />
            <Form.Control type="tel" placeholder="Mobile NO" className="mb-2" />
            <Form.Control type="password" placeholder="Password" className="mb-2" />
            <Form.Control type="password" placeholder="Conform Password" className="mb-2" />
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in">
          <Form>
            <h1 style={{color: "#8F4111"}}>Sign In</h1>
            <Form.Control type="email" placeholder="Email" className="mb-2" />
            <Form.Control type="password" placeholder="Password" className="mb-2" />
            <a href="#" className="forgot-password">Forget Your Password?</a>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
        </div>

        {/* Toggle Container */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <Button 
                variant="outline-light" 
                className="hidden"
                onClick={handleLoginClick}
              >
                Sign In
              </Button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <Button 
                variant="outline-light" 
                className="hidden"
                onClick={handleRegisterClick}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Internal CSS - All styles are contained within the component */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Montserrat', sans-serif;
        }

        .body-wrapper {
          background-color: #c9d6ff;
          background: linear-gradient(to right, #e2e2e2, #c9d6ff);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 100vh;
        }

        .login-container {
          background-color: #fff;
          border-radius: 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
          position: relative;
          overflow: hidden;
          width: 768px;
          max-width: 100%;
          min-height: 480px;
        }

        .login-container p {
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.3px;
          margin: 20px 0;
        }

        .login-container a {
          color: #333;
          font-size: 13px;
          text-decoration: none;
          margin: 15px 0 10px;
        }

        .login-container .btn-primary {
          background-color: #8F4111;
          border-color: #8F4111;
          color:white;
          font-size: 12px;
          padding: 10px 45px;
          border-radius: 8px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-top: 10px;
        }

        .login-container .btn-outline-light {
          background-color: transparent;
          border-color: #fff;
          color:white;
          font-size: 12px;
          padding: 10px 45px;
          border-radius: 8px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-top: 10px;
        }

        .login-container form {
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0 40px;
          height: 100%;
        }

        .login-container .form-control {
          background-color: #eee;
          border: none;
          margin: 8px 0;
          padding: 10px 15px;
          font-size: 13px;
          border-radius: 8px;
          width: 100%;
          outline: none;
        }

        .form-container {
          position: absolute;
          top: 0;
          height: 100%;
          transition: all 0.6s ease-in-out;
        }

        .sign-in {
          left: 0;
          width: 50%;
          z-index: 2;
        }

        .login-container.active .sign-in {
          transform: translateX(100%);
        }

        .sign-up {
          left: 0;
          width: 50%;
          opacity: 0;
          z-index: 1;
        }

        .login-container.active .sign-up {
          transform: translateX(100%);
          opacity: 1;
          z-index: 5;
          animation: move 0.6s;
        }

        @keyframes move {
          0%, 49.99% {
            opacity: 0;
            z-index: 1;
          }
          50%, 100% {
            opacity: 1;
            z-index: 5;
          }
        }

        .toggle-container {
          position: absolute;
          top: 0;
          left: 50%;
          width: 50%;
          height: 100%;
          overflow: hidden;
          transition: all 0.6s ease-in-out;
          border-radius: 150px 0 0 100px;
          z-index: 1000;
        }

        .login-container.active .toggle-container {
          transform: translateX(-100%);
          border-radius: 0 150px 100px 0;
        }

        .toggle {
          background-color: #8F4111;
          height: 100%;
          color: #fff;
          position: relative;
          left: -100%;
          height: 100%;
          width: 200%;
          transform: translateX(0);
          transition: all 0.6s ease-in-out;
        }

        .login-container.active .toggle {
          transform: translateX(50%);
        }

        .toggle-panel {
          position: absolute;
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0 30px;
          text-align: center;
          top: 0;
          transform: translateX(0);
          transition: all 0.6s ease-in-out;
        }

        .toggle-left {
          transform: translateX(-200%);
        }

        .login-container.active .toggle-left {
          transform: translateX(0);
        }

        .toggle-right {
          right: 0;
          transform: translateX(0);
        }

        .login-container.active .toggle-right {
          transform: translateX(200%);
        }

        .forgot-password {
          display: block;
          margin: 15px 0 10px;
        }
      
      `}</style>
    </div>
  );
};

export default LoginPage;