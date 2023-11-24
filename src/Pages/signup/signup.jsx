import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import login from "../../assets/images/login.png";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    axios.get("http://localhost:3001/register").then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", {
        username: username,
        email: email,
        password: password,
      })
      .then(() => {
        console.log("success");
        setUsername("");
        setEmail("");
        setPassword("");
        fetchUser();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl hover:shadow-xl shadow-neutral-700 hover:shadow-neutral-900 rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <div className="mb-3 text-2xl font-bol flex flex-row gap-2 text-neutral-500 font-semibold mx-auto">
            Sign Up to
            <p className="font-semibold text-green-500 text-2xl">zeroFit</p>
          </div>
          <hr className="w-full" />
          <form onSubmit={handleSignUp}>
            <div className="py-4">
              <span className="mb-2 text-md">Username</span>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
           
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black border hover:border-gray-300"
          >
            Sign in
          </button>
          </form>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember for 30 days</span>
            </div>
            <span className="font-bold text-md">Forgot password</span>
          </div>
          <div className="flex flex-row items-center gap-2 py-2">
            <hr className="w-full" /> <p>OR</p> <hr className="w-full" />
          </div>
          <button className="w-full border flex flex-row items-center border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-green-500 hover:text-white">
            <div className="flex flex-row items-center m-auto group:hover">
              <p className="pr-2">Sign in with</p>
              <p className="font-semibol">Google</p>
            </div>
          </button>
          <div className="text-center text-gray-400">
            Already have an account?
            <span className="font-semibold text-green-500 cursor" onClick={()=>navigate("/")} > Sign In</span>
          </div>
        </div>
        <div className="relative">
          <img
            src={login}
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
