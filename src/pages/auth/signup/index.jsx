import React, { useState } from 'react'
import { FormProvider, useForm } from "react-hook-form";
import UserInfoForm from '../../../components/auth/UserInfoForm';
import { Button } from '../../../components/ui/button';
import RoleInfoForm from '../../../components/auth/RoleInfoForm';
import PasswordInfoForm from '../../../components/auth/PasswordInfoForm';

const Register = () => {
  const methods = useForm();
  const [progress, setProgress] = useState(0);

  const formSteps = 50;


  const onSubmit = (data) => {
    if(progress === 100){
      console.log(data); // Do something with the form data
    }

    setProgress(() => progress + formSteps);
  };

  return (
    <main className="flex flex-col items-center justify-center w-full my-6 gap-10">
      {/* logo and title wrapper  */}
      <h1 className="text-4xl text-primary font-bold md:text-4xl md:mt-8 font-primary">
        Register
      </h1>

      <section className="flex flex-col justify-center items-center gap-12 w-[80%] md:w-[35%]">
      <FormProvider {...methods}>

        <form onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center gap-6 w-full">
              {progress === 0 && <UserInfoForm />}

              {progress === 50 && <RoleInfoForm />}

              {progress === 100 && <PasswordInfoForm />}

              <Button className="mt-2 w-full md:w-[40%] md:mt-4 text-white"> 
              {progress <= 50 ? "Next" : "Register"}
              </Button>
        </form>
      </FormProvider>
      </section>


       <div className="text-primary font-primary md:w-full">
          <h1 className=" font-primary text-xs text-center">
            Already have an account? <a href="#">Login</a>
          </h1>
        </div>
    </main>
  );
};

export default Register
