

import React, { useState } from "react";

import Dashboard from '../Dashboard/Dashboard';
import styles from '../Login/Login.css';

// import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = (props) => {

  // const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState();
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  // const history = useHistory();
  const submitHandler =(e) => {
    e.preventDefault();
  };

  const handleLogin = () => {
        props.history.push('/dashboard');
      }

  const loginUser = async () => {
    await axios.post('http://localhost:2000/api/auth', {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(respsonse)
      localStorage.setItem("token", response.headers["x-auth-token"]);
      window.location = '/Dashboard';
    })
    
    .catch(error => console.log(error))
  }


  return (
    <div
      className={`${styles.container} container-fluid d-flex align-items-center justify-content-center`}
    >
      <div className={styles.loginFormContainer}>
        
        <fieldset className="border p-3 rounded">
          <legend
            className={`${styles.loginFormLegend} border rounded p-1 text-center`}
          >
            Login to your account
          </legend>
          <form onSubmit={submitHandler} >
            <div className="form-group">
              <label htmlFor="inputForEmail">Email address</label>
              <span className="mandatory">*</span>
              <input
                id="inputForEmail"
                name="email"
                type="email"
                value={email}
                className="form-control"
                aria-describedby="Enter email address"
                placeholder="Enter email address"
                onChange={(e) => setEmail(e.target.value)}
                // // ref={register({
                //   required: {
                //     value: true,
                //     message: "Please enter your email address",
                //   },
                // })}
              />
              {/**
               * we provide validation configuration for email field above
               * error message are displayed with code below
               */}
              {/* {errors.email && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.email.message}
                </span>
              )} */}
            </div>
            <div className="form-group">
              <label htmlFor="inputForPassword">Password</label>
              <span className="mandatory">*</span>
              <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                id="inputForPassword"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                // ref={register({
                //   required: {
                //     value: true,
                //     message: "Please enter password",
                //   },
                // })}
              />
              {/* {errors.password && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.password.message}
                </span>
              )} */}
            </div>
            <div className="d-flex align-items-center">
              <button type="submit" value="Submit" className="btn btn-outline-primary">
                Login
              </button>
              
              <button className="btn btn-link ml-auto">
                <Link to="/register">New User</Link>
              </button>
            </div>
        
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;










 
// function Login(props) {
//   const email = useFormInput('');
//   const password = useFormInput('');
//   // const [error, setError] = useState(null);
//   // const [loading, setLoading] = useState(false);
 
//   // handle button click of login form
  
//   const handleSubmit = async () => {
//     props.history.push('../Dashboard/Dashboard');
//     let data = {
//         email: email,
//         password: password,
//     };
//     try {
//         let response = await axios.post("http://localhost:2000/api/auth/", data);
//         localStorage.setItem("token", response.headers["x-auth-token"]);
//         console.log(response);
//         window.location = "/";
//     } catch (error) {
//         console.log(error);
//     }
// };

// return ( 
        
//   <form onSubmit={handleSubmit}>
//       <label>
//           Email:
//           <input
//               type="text"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               />
//       </label>
//       <label>
//           Password:
//           <input
//               type="text"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               />
//       </label>
//       <input type="submit" value="Submit" />
//   </form>
// );
// }






// //   return (
// //     <div>
// //       Login<br /><br />
// //       <div>
// //         Username<br />
// //         <input type="text" {...username} autoComplete="new-password" />
// //       </div>
// //       <div style={{ marginTop: 10 }}>
// //         Password<br />
// //         <input type="password" {...password} autoComplete="new-password" />
// //       </div>
// //       {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
// //       <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
// //     </div>
// //   );
// // }
 
// // const useFormInput = initialValue => {
// //   const [value, setValue] = useState(initialValue);
 
// //   const handleChange = e => {
// //     setValue(e.target.value);
// //   }
// //   return {
// //     value,
// //     onChange: handleChange
// //   }
// // }
 
// export default Login;
 


