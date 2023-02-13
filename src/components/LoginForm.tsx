import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  onSubmit: (email: string, password: string) => void;
}

type FormValues = {
    email: string;
    password: string;
  };

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onFormSubmit = (data: FormValues): void => {
    onSubmit(data.email, data.password);
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="bg-white p-6 rounded-lg shadow-md w-1/3"
    >
      <div className="mb-4">
        <label className="block font-bold mb-2 text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email",{ required: true })}
          className={`border border-gray-400 p-2 w-full ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">Email is required</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block font-bold mb-2 text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password",{ required: true })}
          className={`border border-gray-400 p-2 w-full ${
            errors.password ? "border-red-500" : ""
          }`}
        />
        {errors.password && (
          <p className="text-red-500 text-xs italic">Password is required</p>
        )}
      </div>
      <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
