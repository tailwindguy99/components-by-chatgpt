import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  onSubmit: (name: string, email: string, password: string) => void;
}

const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    onSubmit(data.name, data.email, data.password);
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block font-bold mb-2 text-gray-700" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          className={`border border-gray-400 p-2 w-full ${
            errors.name ? "border-red-500" : ""
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-xs italic">Name is required</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2 text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
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
          {...register("password", { required: true })}
          className={`border border-gray-400 p-2 w-full ${
            errors.password ? "border-red-500" : ""
          }`}
        />
        {errors.password && (
          <p className="text-red-500 text-xs italic">Password is required</p>
        )}
      </div>
      <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
