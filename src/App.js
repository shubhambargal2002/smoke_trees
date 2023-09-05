import "./App.css";
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [user,setUser]=useState({userName:"", address:""})

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/user", user)
            console.log(res);
            console.log(user);
            // if(res.status === 200){
            //     toast.success("Registered Successfully...!")
            // }
        } catch (error) {
            console.log(error);
            if(error.response.status === 422){
                // toast.error(error.response.data.error)
                console.log(error.response.data.error);
            }
        }
    }

    const onChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
      }
  return (
    <div className="user-outer">
      <div className="user">
        <form className="formContainer" onSubmit={handleSubmit}>
          <h1>User Details</h1>
          <input
            type="text"
            placeholder="User Name"
            name="userName"
            onChange={onChange}
            required
          />
          <textarea
            placeholder="Address"
            name="address"
            onChange={onChange}
            required
          />
          <button type="submit" className="submitButton">
            Save Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
