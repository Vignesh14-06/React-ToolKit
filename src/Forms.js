import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./Slice/Slice";

const Forms = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        city: "",
      });
      // const navigate = useNavigate()
      const [inputError, setInputError] = useState({});
      const dispatch = useDispatch();
      const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
      };
      // console.log(input,"handle")
    
      const onSubmit = (e) => {
        e.preventDefault();
        setInputError(errorValidate(input));
        if(input.name && input.email && input.city !== ''){
            dispatch(addUser(input));
        }
    //    window.location.replace('https://www.facebook.com/');
      // navigate("https://www.facebook.com")
        setInput({
          name: "",
          email: "",
          city: "",
        });
      };
    
      const errorValidate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
          errors.name = "Username is mandatory . please enter your name";
        }
        if (!values.email) {
          errors.email = "Email Id is mandatory. Please enter your Email id";
        } else if (!regex.test(values.email)) {
          errors.email = "Please enter a valid email";
        }
        if (!values.city) {
            errors.city = "City is mandatory . please enter your name";
          }
        return errors;
      };
  return (
    <div>
        <form
        style={{ display: "flex", flexDirection: "column" , margin:'20px'}}
        onSubmit={onSubmit}
      >
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={input.name}
            onChange={handleChange}
          />
          <p>{inputError.name}</p>
        </div>
        <div>
          <label>EmailId:</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={input.email}
            onChange={handleChange}
          />
          <p>{inputError.email}</p>
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={input.city}
            onChange={handleChange}
          />
          <p>{inputError.city}</p>
        </div>
        <button  type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default Forms
