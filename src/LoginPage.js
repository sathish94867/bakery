// import React, { useState } from "react";
// import { Container, Form, Button } from "react-bootstrap";
// import { X } from "lucide-react";

// const LoginPage = ({ onClose }) => {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <div className="modal-overlay">
//       <div className="login-modal">
//         {/* Close Button */}
//         <button className="close-btn" onClick={onClose}>
//           <X size={24} />
//         </button>

//         <Container id="container" className={`login-container ${isActive ? "active" : ""}`}>
//           {/* Sign Up Form */}
//           <div className="form-container sign-up">
//             <Form>
//               <h1 style={{ color: "#8F4111" }}>Create Account</h1>
//               <Form.Control type="text" placeholder="Name" className="mb-2" />
//               <Form.Control type="email" placeholder="Email" className="mb-2" />
//               <Form.Control type="tel" placeholder="Mobile No" className="mb-2" />
//               <Form.Control type="password" placeholder="Password" className="mb-2" />
//               <Form.Control type="password" placeholder="Confirm Password" className="mb-2" />
//               <Button variant="primary" type="submit">Sign Up</Button>
//             </Form>
//           </div>

//           {/* Sign In Form */}
//           <div className="form-container sign-in">
//             <Form>
//               <h1 style={{ color: "#8F4111" }}>Sign In</h1>
//               <Form.Control type="email" placeholder="Email" className="mb-2" />
//               <Form.Control type="password" placeholder="Password" className="mb-2" />
//               <a href="#" className="forgot-password">Forget Your Password?</a>
//               <Button variant="primary" type="submit">Sign In</Button>
//             </Form>
//           </div>

//           {/* Toggle Container */}
//           <div className="toggle-container">
//             <div className="toggle">
//               <div className="toggle-panel toggle-left">
//                 <h1>Welcome Back!</h1>
//                 <p>Enter your personal details to use all site features</p>
//                 <Button variant="outline-light" className="hidden" onClick={() => setIsActive(false)}>Sign In</Button>
//               </div>
//               <div className="toggle-panel toggle-right">
//                 <h1>Hello, Friend!</h1>
//                 <p>Register with your personal details to use all site features</p>
//                 <Button variant="outline-light" className="hidden" onClick={() => setIsActive(true)}>Sign Up</Button>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>

//       {/* CSS for Modal */}
//       <style>{`
//               @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//           font-family: 'Montserrat', sans-serif;
//         }

//         .body-wrapper {
//           // background-color:rgb(205, 224, 204);
//           // background: linear-gradient(to right,rgb(193, 141, 19),rgb(210, 203, 87));
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-direction: column;
//           height: 100vh;
//         }

//         .login-container {
//           background-color: #fff;
//           border-radius: 30px;
//           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
//           position: relative;
//           overflow: hidden;
//           width: 768px;
//           max-width: 100%;
//           min-height: 480px;
//         }

//         .login-container p {
//           font-size: 14px;
//           line-height: 20px;
//           letter-spacing: 0.3px;
//           margin: 20px 0;
//         }

//         .login-container a {
//           color: #333;
//           font-size: 13px;
//           text-decoration: none;
//           margin: 15px 0 10px;
//         }

//         .login-container .btn-primary {
//           background-color: #8F4111;
//           border-color: #8F4111;
//           color:white;
//           font-size: 12px;
//           padding: 10px 45px;
//           border-radius: 8px;
//           font-weight: 600;
//           letter-spacing: 0.5px;
//           text-transform: uppercase;
//           margin-top: 10px;
//         }

//         .login-container .btn-outline-light {
//           background-color: transparent;
//           border-color: #fff;
//           color:white;
//           font-size: 12px;
//           padding: 10px 45px;
//           border-radius: 8px;
//           font-weight: 600;
//           letter-spacing: 0.5px;
//           text-transform: uppercase;
//           margin-top: 10px;
//         }

//         .login-container form {
//           background-color: #fff;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-direction: column;
//           padding: 0 40px;
//           height: 100%;
//         }

//         .login-container .form-control {
//           background-color: #eee;
//           border: none;
//           margin: 8px 0;
//           padding: 10px 15px;
//           font-size: 13px;
//           border-radius: 8px;
//           width: 100%;
//           outline: none;
//         }

//         .form-container {
//           position: absolute;
//           top: 0;
//           height: 100%;
//           transition: all 0.6s ease-in-out;
//         }

//         .sign-in {
//           left: 0;
//           width: 50%;
//           z-index: 2;
//         }

//         .login-container.active .sign-in {
//           transform: translateX(100%);
//         }

//         .sign-up {
//           left: 0;
//           width: 50%;
//           opacity: 0;
//           z-index: 1;
//         }

//         .login-container.active .sign-up {
//           transform: translateX(100%);
//           opacity: 1;
//           z-index: 5;
//           animation: move 0.6s;
//         }

//         @keyframes move {
//           0%, 49.99% {
//             opacity: 0;
//             z-index: 1;
//           }
//           50%, 100% {
//             opacity: 1;
//             z-index: 5;
//           }
//         }

//         .toggle-container {
//           position: absolute;
//           top: 0;
//           left: 50%;
//           width: 50%;
//           height: 100%;
//           overflow: hidden;
//           transition: all 0.6s ease-in-out;
//           border-radius: 150px 0 0 100px;
//           z-index: 1000;
//         }

//         .login-container.active .toggle-container {
//           transform: translateX(-100%);
//           border-radius: 0 150px 100px 0;
//         }

//         .toggle {
//           background-color: #8F4111;
//           height: 100%;
//           color: #fff;
//           position: relative;
//           left: -100%;
//           height: 100%;
//           width: 200%;
//           transform: translateX(0);
//           transition: all 0.6s ease-in-out;
//         }

//         .login-container.active .toggle {
//           transform: translateX(50%);
//         }

//         .toggle-panel {
//           position: absolute;
//           width: 50%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-direction: column;
//           padding: 0 30px;
//           text-align: center;
//           top: 0;
//           transform: translateX(0);
//           transition: all 0.6s ease-in-out;
//         }

//         .toggle-left {
//           transform: translateX(-200%);
//         }

//         .login-container.active .toggle-left {
//           transform: translateX(0);
//         }

//         .toggle-right {
//           right: 0;
//           transform: translateX(0);
//         }

//         .login-container.active .toggle-right {
//           transform: translateX(200%);
//         }

//         .forgot-password {
//           display: block;
//           margin: 15px 0 10px;
//         }

//         .modal-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0, 0, 0, 0.5);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 1000;
//           transition: opacity 0.3s ease-in-out;
//         }

//         .login-modal {
//           background: white;
//           padding: 20px;
//           border-radius: 20px;
//           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
//           width: 800px;
//           max-width: 95%;
//           position: relative;
//           animation: fadeIn 0.3s ease-in-out;
//         }

//         @keyframes fadeIn {
//           from { transform: scale(0.9); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
// .close-btn {
//   position: absolute;
//   top: 0px;  /* Adjust distance from the top */
//   right: 0px; /* Adjust distance from the right */
//   background: black;
//   color:white;
//   border: none;
//   cursor: pointer;
//   z-index: 10;  /* Ensure it's above other elements */
//   padding: 5px; /* Add padding for better clickability */
//   transition: transform 0.2s ease-in-out;
// }

// .close-btn:hover {
//   transform: scale(1.2);  /* Slight zoom effect */
//    background: red;
// }

//       `}</style>
//     </div>
//   );
// };

// export default LoginPage;




















import "./LoginPage.css";
import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Toggle between user & admin login
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleRegisterChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Registration (User or Admin)
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const url = isAdmin
        ? "http://localhost:8080/api/auth/admin/register"
        : "http://localhost:8080/api/auth/register";

      const response = await axios.post(url, {
        name: formData.name,
        email: formData.email,
        mobile: isAdmin ? undefined : formData.mobile, // Mobile not needed for admins
        password: formData.password,
      });

      alert(response.data);
      setIsActive(false); // Switch to login form
    } catch (error) {
      alert("Registration failed! Try again.");
    }
  };

  // ✅ Handle Login (User or Admin)
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isAdmin
        ? "http://localhost:8080/api/auth/admin/login"
        : "http://localhost:8080/api/auth/login";

      const response = await axios.post(url, {
        email: loginData.email,
        password: loginData.password,
      });

      const user = response.data;
      localStorage.setItem("user", JSON.stringify(user)); // Store session

      // Redirect to dashboard
      if (user.role === "ADMIN") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } catch (error) {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <Container id="container" className={`login-container ${isActive ? "active" : ""}`}>
          {/* Sign Up Form */}
          <div className="form-container sign-up">
            <Form onSubmit={handleRegisterSubmit}>
              <h1 style={{ color: "#8F4111" }}>{isAdmin ? "Admin Register" : "Create Account"}</h1>
              <Form.Control type="text" name="name" placeholder="Name" className="mb-2" onChange={handleRegisterChange} required />
              <Form.Control type="email" name="email" placeholder="Email" className="mb-2" onChange={handleRegisterChange} required />
              {!isAdmin && (
                <Form.Control type="tel" name="mobile" placeholder="Mobile No" className="mb-2" onChange={handleRegisterChange} required />
              )}
              <Form.Control type="password" name="password" placeholder="Password" className="mb-2" onChange={handleRegisterChange} required />
              <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" className="mb-2" onChange={handleRegisterChange} required />
              
              {/* Toggle for Admin Registration */}
              {/* <label className="admin-toggle">
                <input type="checkbox" onChange={(e) => setIsAdmin(e.target.checked)} />
                Register as Admin
              </label> */}

              <Button variant="primary" type="submit">{isAdmin ? "Register Admin" : "Sign Up"}</Button>
            </Form>
          </div>

          {/* Sign In Form */}
          <div className="form-container sign-in">
            <Form onSubmit={handleLoginSubmit}>
              <h1 style={{ color: "#8F4111" }}>{isAdmin ? "Admin Login" : "Sign In"}</h1>
              <Form.Control type="email" name="email" placeholder="Email" className="mb-2" onChange={handleLoginChange} required />
              <Form.Control type="password" name="password" placeholder="Password" className="mb-2" onChange={handleLoginChange} required />
              <a href="#" className="forgot-password">Forgot Your Password?</a>
              
              {/* Toggle for Admin Login */}
              <label className="admin-toggle">
                <input type="checkbox" onChange={(e) => setIsAdmin(e.target.checked)} />
                Login as Admin
              </label>

              <Button variant="primary" type="submit">{isAdmin ? "Admin Login" : "Sign In"}</Button>
            </Form>
          </div>

          {/* Toggle Container */}
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all site features</p>
                <Button variant="outline-light" className="hidden" onClick={() => setIsActive(false)}>Sign In</Button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>Register with your personal details to use all site features</p>
                <Button variant="outline-light" className="hidden" onClick={() => setIsActive(true)}>Sign Up</Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default LoginPage;



