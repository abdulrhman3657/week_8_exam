import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

function Login() {
  const API = "https://fakestoreapi.com/users";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const redirect = () => {
    navigate("/");
  };

  const validate_and_post = () => {
    // validate data here

    if (password == "" || email == "") {
      Swal.fire({
        icon: "error",
        title: "all values must be filled",
      });
      return;
    }


    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    if (!validateEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "invalid email",
      });
      return;
    }

    axios.get(API).then((res) => {
      console.log(res.data);

      const userExists = res.data.find((user) => {
        return user.email == email;
      });

      if (!userExists) {
        Swal.fire({
          icon: "error",
          title: "user does not exists",
        });
        return;
      }

      if(userExists.email != email || userExists.password != password){
                Swal.fire({
          icon: "error",
          title: "invalid email or password",
        });
        return;
      }

      //       {
      //     "address": {
      //         "geolocation": {
      //             "lat": "-37.3159",
      //             "long": "81.1496"
      //         },
      //         "city": "kilcoole",
      //         "street": "new road",
      //         "number": 7682,
      //         "zipcode": "12926-3874"
      //     },
      //     "id": 1,
      //     "email": "john@gmail.com",
      //     "username": "johnd",
      //     "password": "m38rmF$",
      //     "name": {
      //         "firstname": "john",
      //         "lastname": "doe"
      //     },
      //     "phone": "1-570-236-7033",
      //     "__v": 0
      // }


      // email john@gmail.com
      // password m38rmF$

      console.log(userExists.password)

      Swal.fire({
        icon: "success",
        title: "loggen in successfully",
      });


      localStorage.setItem("username", userExists.username)

      redirect()


    });
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            log in
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            <button
              onClick={validate_and_post}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors"
            >
              Sign In
            </button>
          </div>
          <div className="mt-6 text-center text-sm text-gray-600">
            Not signed up?
            <Link
              to={"/signup"}
              className="text-indigo-600 hover:text-indigo-500 font-medium"
            >
              {" "}
              sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
