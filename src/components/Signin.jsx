import React, { useEffect, useState } from "react";
import { SIGN_IN } from "../api/authRoutes";
import CryptoJS from "crypto-js";



export default function Signin() {

    const [signForm, setSignForm] = useState({
        email: "",
        password: ""
    })
    function handleChange(event) {
        const { name, value } = event.target
        setSignForm(prevValue => {
            return { ...prevValue, [name]: value }
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const encryptedPassword = CryptoJS.AES.encrypt(signForm.password, import.meta.env.VITE_KEY).toString()
        console.log(encryptedPassword)
        try {
            const { user } = await SIGN_IN({ ...signForm, password: encryptedPassword })
            console.log(user)
        } catch (error) {
            console.log(error)
            return
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="email" value={signForm.email} onChange={handleChange} placeholder="Email" type="email"></input>
                <input name="password" value={signForm.password} onChange={handleChange} placeholder="Password" type="password"></input>
                <button>Sign In</button>
            </form>
        </>
    )
}
