import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [ssn, setSsn] = useState("");

    const handleSubmit = async () => {
        let data = {
            name: name,
            email: email,
            password: password,
            dob: dob,
            ssn: ssn,
        };
        try {
            let response = await axios.post("http://localhost:2000/api/accounts/", data);
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
                Full Name:
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
            </label>
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
            <label>
                DOB:
                <input
                    type="text"
                    name="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    />
            </label>
            <label>
                SSN:
                <input
                    type="text"
                    name="ssn"
                    value={ssn}
                    onChange={(e) => setSsn(e.target.value)}
                    />
            </label>
            <input type="submit" value="Submit" />
        </form>
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
 
 


