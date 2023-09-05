import "./App.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const initialUser = { userName: "", address: "" };
  const [user, setUser] = useState(initialUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/user", user);
      if (res.status === 200) {
        toast.success("User data added Successfully...!");
        setUser(initialUser);
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        toast.error(error.response.data.error);
      }
    }
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="user-outer">
      <div className="user">
        <form className="formContainer" onSubmit={handleSubmit}>
          <h1>User Details</h1>
          <input
            type="text"
            placeholder="User Name"
            id="userName"
            name="userName"
            value={user.userName}
            onChange={onChange}
            required
          />
          <textarea
            placeholder="Address"
            id="address"
            name="address"
            value={user.address}
            onChange={onChange}
            required
          />
          <button type="submit" className="submitButton">
            Save Details
          </button>
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
