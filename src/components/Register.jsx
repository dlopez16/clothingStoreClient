import { React, useState } from "react";
import { REGISTER } from "../api/authRoutes";
import CryptoJS from "crypto-js";

export default function Register() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })



    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevValue => {
            return { ...prevValue, [name]: value }
        })
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (formData.password !== formData.confirmPassword) {
            console.log("password doest match")
            return;
        }
        console.log("registered")
        try {
            const { user } = await REGISTER(formData)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={formData.firstName} name="firstName" placeholder="First Name" />Name
                <input type="test" onChange={handleChange} value={formData.lastName} name="lastName" placeholder="Last Name" />Last Name
                <input type="email" onChange={handleChange} value={formData.email} name="email" placeholder="Email" />Email
                <input type="password" onChange={handleChange} value={formData.password} name="password" placeholder="Password" />Password
                <input type="password" onChange={handleChange} value={formData.confirmPassword} name="confirmPassword" placeholder="Confirm Password" />Confim Password
                <button>Register</button>
            </form>

        </div>
    )

}