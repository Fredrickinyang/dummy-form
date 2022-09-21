import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [inputValue, setinputValue] = useState({
    email: "",
    firstname: "",
    lastname: "",
    phone_number: "+234",
    username: "",
    role: "Landlord",
    date_of_birth: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ ...inputValue });
    try {
      let data = await axios.post(
        "https://staging.netvaluepay.com/api/v1/auth/signup/",
        inputValue
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App h-screen pt-8">
      <h1 className="text-3xl text-center">Dummy Form</h1>
      <form
        className="flex flex-col w-96 border border-black p-4 m-auto rounded-lg  "
        onSubmit={handleSubmit}>
        <input
          type="email"
          value={inputValue.email}
          name=""
          placeholder="Email"
          className="border my-2"
          onChange={(e) =>
            setinputValue({ ...inputValue, email: e.target.value })
          }
        />
        <input
          value={inputValue.firstname}
          type="text"
          name=""
          placeholder="firstname"
          className="border my-2"
          onChange={(e) =>
            setinputValue({ ...inputValue, firstname: e.target.value })
          }
        />
        <input
          value={inputValue.lastname}
          type="text"
          name=""
          placeholder="lastname"
          className="border my-2"
          onChange={(e) =>
            setinputValue({ ...inputValue, lastname: e.target.value })
          }
        />
        <input
          value={inputValue.phone_number}
          type="text"
          placeholder="Phone Number"
          className="border my-2"
          onChange={(e) =>
            setinputValue({
              ...inputValue,
              phone_number: e.target.value,
            })
          }
        />
        <input
          value={inputValue.username}
          type="text"
          name=""
          placeholder="username"
          className="border my-2"
          onChange={(e) =>
            setinputValue({ ...inputValue, username: e.target.value })
          }
        />
        <input
          value={inputValue.role}
          type="text"
          name=""
          readOnly
          className="border my-2"
        />
        <input
          type="date"
          name=""
          value={inputValue.date_of_birth}
          onChange={(e) =>
            setinputValue({ ...inputValue, date_of_birth: e.target.value })
          }
        />
        <input
          value={inputValue.password}
          type="password"
          name=""
          placeholder="password"
          className="border my-2"
          onChange={(e) =>
            setinputValue({ ...inputValue, password: e.target.value })
          }
        />
        <input type="submit" className="bg-black text-white" />
      </form>
    </div>
  );
}

export default App;
