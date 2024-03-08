import React, { useState} from "react";
import {Label} from "../../../components/ui/label"
import {Input} from "../../../components/ui/input"
import {Button} from "../../../components/ui/button"
import userIcon from '../../../icons/user.svg'
import lockIcon from '../../../icons/lock.svg'

const initialFormData = { email: "", password: "" };


const Login = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  
  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)// function call for login post request goes here


  }
    // setIsLoading(true);

  return (
    <>
      <main className="flex items-center justify-center h-[100vh]">
        <section className="flex flex-col items-center justify-center gap-20 w-[50%] md:bg-shadow md:gap-14 md:p-10 md:rounded-lg lg:w-[40%]">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold md:text-4xl md:mt-8 font-primary">Login</h1>
          </div>
          <div className="text-primary font-primary md:w-full ">
            <form  
             onSubmit={handleFormSubmit}
             onChange={handleFormInputChange}
            className="flex flex-col gap-10 justify-center items-center w-full md:gap-8">

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="username" className="text-bold">
                Email
              </Label>
              <div className="flex items-center border-primary border border-x-0 border-t-0  rounded-none">
                <img src={userIcon} className="w-4 " alt="user icon" />
                <Input
                  type="text"
                  id="Email"
                  placeholder="Type your Email"
                  className="border-primary border-none focus-visible:ring-0"
                  name="email"
                  required
                />
              </div>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password" className="text-bold">
                Password
              </Label>
              <div className="flex items-center border-primary border border-x-0 border-t-0  rounded-none">
                <img src={lockIcon} className="w-4" alt="user icon" />
                <Input
                  type="password"
                  id="password"
                  placeholder="Type your password"
                  className="border-primary border-none focus-visible:ring-0"
                  name="password"
                  required
                  minLength={8}
                />
                
              </div>
            </div>

            <div className="md:mt-4">
              <Button
                className="bg-primary w-52 rounded-2xl text-white"
                disabled={isLoading}
              >
                {isLoading ? "loading..." : "Login"}
              </Button>
            </div>

            </form>

            <h1 className=" font-primary text-xs mt-4 text-center">
            {" "}
            Don&apos;t have an account?
            <a href="#"> Register</a>
          </h1>

          </div>
        </section>
      </main>
    </>
  );
};


export default Login