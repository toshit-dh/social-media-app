import React, { useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios'
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/api-routes";
export default function Login({changeAuth}) {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(handleValidation()){
        const { username, email, password} = values;
        const {data} = await axios.post(registerRoute,{username,email,password})
    }
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handleValidation = () => {
    const { username, email, password, confirmpassword } = values;
    if (password != confirmpassword) {
      toast.error(
        "Password and Confirm Password should be same.",
        toastOptions
      );
      return false;
    }
    else if(username.length<3){
        toast.error("Username should be greater than 3 characters", toastOptions)
    }
    else if(password.length<7){
        toast.error("Password should be greater than 7 characters", toastOptions)
        return false
    }
    else if(email===""){
        toast.error("Email should be filled.")
        return false
    }
    return true 
  };
  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e)} className="form-class">
          <div className="brand">
            <h1>SMApp</h1>
          </div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>
            Already have an account? <span onClick={()=>changeAuth("Register")}>Register</span>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}
const FormContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #282a34;
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    border: 0.2rem solid #4e0eff;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #282a34;
    padding: 3rem 5rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }
    button {
      background-color: #997af0;
      color: white;
      width: 100%;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.5s ease-in-out;
      &:hover {
        background-color: #4e0eff;
      }
    }
    span {
      text-transform: uppercase;
      color: white;
      span {
        cursor: pointer;
        color: #4e0eff;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;