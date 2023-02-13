import RegisterForm from "@/components/RegisterForm";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="h-screen bg-gray-400 flex justify-center items-center">
      <RegisterForm onSubmit={() => {}} />
    </div>
  );
};

export default RegisterPage;
