import "./App.css";

function App() {
  return (
    <div className="user-outer">
      <div className="user">
        <form className="formContainer">
          <h1>User Details</h1>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            required
          />
          <textarea
            type="text"
            placeholder="Address"
            name="firstName"
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
