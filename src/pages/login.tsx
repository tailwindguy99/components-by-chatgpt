import LoginForm from "@/components/LoginForm";
import React from "react";

const LoginPage = () => {
  const onSubmit = (email: string, password: string): void => {
    console.log(email);
    console.log(password);
  };
  return (
    <div className="h-screen bg-gray-400 flex justify-center items-center">
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default LoginPage;
