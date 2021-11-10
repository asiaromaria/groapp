import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";



const Register = ( {user, setUser} ) => { 
    // const [user, setUser] = useState({})
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = async () => {
        await axios.post('http://localhost:2000/api/accounts', {
            name: name,
            email: email,
            password: password,
            dob: dob,
            // paymentsToGro: paymentsToGro,
            // creditScoreHistory: creditScoreHistory,
            // paymentHistory: paymentHistory,
            // accountsOwed: accountsOwed,
            // lengthOfCredit: lengthOfCredit,
            // creditCards: creditCards,
            // loans: loans,
            // retailCards: retailCards,
            // mortgageLoans: mortgageLoans,
            // recentCreditLines: recentCreditLines,

        })
        
        .then((res) => {
          setUser(res)
            console.log(res.data, user)
            localStorage.setItem('token', res.data);
            window.location = '/dashboard';
            console.log(localStorage.getItem("token"))
        })
        .catch(error => console.log(error))
    }


    return ( 
        <div>

        
        <form onClick={() => handleSubmit()}>
            <label>
                Full Name:
                <input
                    type="text"
                    name="name"
                    value={name}
                    // onChange={(e) => setName(e.target.value)}
                    onClick={() => handleSubmit()}
                    />
            </label>
            <label>
                Email:
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onClick={() => handleSubmit()}
                    />
            </label>
            <label>
                Password:
                <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onClick={() => handleSubmit()}
                    />
            </label>
            <label>
                DOB:
                <input
                    type="text"
                    name="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    onClick={() => handleSubmit()}
                    />
            </label> 
            <input type="submit" value="Submit" />
            <button onClick={() => handleSubmit()}>Login </button>
        </form>
        </div>
     );
}

 
export default Register;





























// function Register(props) {
//   const username = useFormInput('');
//   const password = useFormInput('');
//   const fullname = useFormInput('');
//   const email = useFormInput('');
//   const dob = useFormInput('');
//   const ssn = useFormInput('');
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
 
//   // handle button click of Register form
//   const handleRegister = () => {
//     props.history.push('/dashboard');
//   }
 
//   return (
//     <div>
//       Register<br /><br />
//       <div>
//         Username:<br />
//         <input type="text" {...username} autoComplete="new-password" />
//       </div>
//       <div>
//         Full Name:<br />
//         <input type="text" {...fullname} autoComplete="new-password" />
//       </div>
//       <div>
//         Email:<br />
//         <input type="text" {...email} autoComplete="new-password" />
//       </div>
//       <div>
//         Date of Birth:<br />
//         <input type="text" {...dob} autoComplete="new-password" />
//       </div>
//       <div>
//         SSN:<br />
//         <input type="text" {...ssn} autoComplete="new-password" />
//       </div>
//       <div style={{ marginTop: 10 }}>
//         Password<br />
//         <input type="password" {...password} autoComplete="new-password" />
//       </div>
//       {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
//       <input type="button" value={loading ? 'Loading...' : 'Register'} onClick={handleRegister} disabled={loading} /><br />
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
 
 


