import React, { useState } from 'react'
import Class from "../../styles/Login.module.css"

function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        //do validation
        if (password !== confirmPassword) {
            return setError("Password does not match");
          }

          const user = {
            fullname: fullName,
            phone: phone,
            email: email,
            password: password,
          };
    }

  return (
    <div className={Class.container}>
        <h5>Sign up to FamilyMart</h5>
        <form action="">
            <div className={Class.input}>
                <label htmlFor="">Full name</label>
                <input type="text" name="" id="" required/>
            </div>

            <div className={Class.input}>
                <label htmlFor="">Enter Email</label>
                <input type="email" value={fullName} onChange={(e)=> setFullName(e.target.value)} required/>
            </div>
            <div className={Class.input}>
                <label htmlFor="">Phone No</label>
                <input type="phone" required/>
            </div>

            <div className={Class.input}>
                <label htmlFor="">Password</label>
                <input type="password" required/>
            </div>
            <div className={Class.input}>
                <label htmlFor="">Confirm Password</label>
                <input type="password" required/>
            </div>
        <button type='submit'>Signup</button>
        </form>
    </div>
  )
}

export default Signup