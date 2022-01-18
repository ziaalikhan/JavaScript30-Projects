import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userAge, setuserAge] = useState("");

  const [userList, setuserList] = useState([]);
  const [search, setsearch] = useState("");

  const getUser = async () => {
    const response = await axios.get("http://localhost:4000/user");
    setuserList(await response.data);
  };

  const inputsHandler = () => {
    const sendData = {
      name: userName,
      email: userEmail,
      age: userAge,
    };
    axios
      .post("http://localhost:4000/send", sendData)
      .then((data) => {
        // console.log(data.data);
        getUser();
      })
      .catch((error) => {
        console.log(error.message);
      });
    setuserName("");
    setuserEmail("");
    setuserAge("");
  };

  const deleteBtn = (_id) => {
    axios
      .post("http://localhost:4000/userDelete", { _id: _id })
      .then(() => getUser());
  };

  console.log(userList);
  useEffect(() => {
    getUser();
  }, []);

  // const Filterized_Data = userList.filter((val) => {
  //   if (val.name === "") {
  //     return val;
  //   } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
  //     return val;
  //   }
  // });

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter Your Name"
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Your Email"
        value={userEmail}
        onChange={(e) => setuserEmail(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Enter Your Age"
        value={userAge}
        onChange={(e) => setuserAge(e.target.value)}
      />
      <br />
      <button onClick={inputsHandler}>Send</button>
      <br />
      <br />
      <br />
      <div>
        <div>
          {userList.length === 0 ? null : (
            <input
              value={search}
              type="text"
              placeholder="Search Name"
              onChange={(e) => setsearch(e.target.value)}
            />
          )}
        </div>
        {userList
          .filter((val) => val.name.match(new RegExp(search, "i")))
          .map((user) => {
            return (
              <>
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>
                <h4>{user.age}</h4>
                <button onClick={() => deleteBtn(user._id)}>Delete</button>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default App;
