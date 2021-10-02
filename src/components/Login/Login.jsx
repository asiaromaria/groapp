import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
 
function Login(props) {
  const email = useFormInput('');
  const password = useFormInput('');
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
 
  // handle button click of login form
  
  const handleSubmit = async () => {
    props.history.push('../Dashboard/Dashboard');
    let data = {
        email: email,
        password: password,
    };
    try {
        let response = await axios.post("http://localhost:2000/api/auth/", data);
        localStorage.setItem("token", response.headers["x-auth-token"]);
        console.log(response);
        window.location = "/";
    } catch (error) {
        console.log(error);
    }
};

return ( 
        
  <form onSubmit={handleSubmit}>
      <label>
          Email:
          <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
      </label>
      <label>
          Password:
          <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
      </label>
      <input type="submit" value="Submit" />
  </form>
);
}






//   return (
//     <div>
//       Login<br /><br />
//       <div>
//         Username<br />
//         <input type="text" {...username} autoComplete="new-password" />
//       </div>
//       <div style={{ marginTop: 10 }}>
//         Password<br />
//         <input type="password" {...password} autoComplete="new-password" />
//       </div>
//       {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
//       <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
//     </div>
//   );
// }
 
// const useFormInput = initialValue => {
//   const [value, setValue] = useState(initialValue);
 
//   const handleChange = e => {
//     setValue(e.target.value);
//   }
//   return {
//     value,
//     onChange: handleChange
//   }
// }
 
export default Login;
 


