import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import '../Login/Login.css';

const Profile = ( {user, setUser} ) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [name, setName] = useState("");


    const submitHandler =(e) => {
        e.preventDefault();
    };


    const editProfile = async () => {
        await axios.put('http://localhost:2000/api/accounts/', {
            name: name,
            email: email,
            password: password,
            dob: dob,
        })
        .then((res) => {
            setUser(res)
            console.log(res.data, user);
            localStorage.setItem('token', res.data);
            window.location = '/dashboard';
            console.log(localStorage.getItem("token"))
        })
        .catch(error => console.log(error))
    }

    return ( 
        <div>
            <h2>
                {user}
            </h2>
            <button> Edit Profile </button>
            <form onClick={() => editProfile()}>
                <label>
                    Full Name:
                    <input
                        type="Asia"
                        name="name"
                        value={name, setName}
                        onClick={() => editProfile()} />
                </label>
                <input type="submit" value="Submut" />
            </form>
        </div>
     );
}
 
export default Profile;