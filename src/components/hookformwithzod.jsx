import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function HookFormWithZod() {
  const schema = z
    .object({
      firstName: z.string().min(2).max(10),
      lastName: z.string().min(2).max(10),
      email: z.string().email(),
      password: z.string().min(6).max(20),
      confirmPassword: z.string().min(6).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password does not matched",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({ resolver: zodResolver(schema) });

  const submitData = (data) => {
    console.log("checking ...", data);
  };

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <form
        onSubmit={handleSubmit(submitData)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>first name:</label>
        <input type="text" {...register("firstName")} />
        {errors.firstName && <span className="text-danger">{errors.firstName.message}</span>}
        <label>last name:</label>
        <input type="text" {...register("lastName")} />
        {errors.lastName && <span className="text-danger">{errors.lastName.message}</span>}
        <label>email :</label>
        <input type="email" {...register("email")} />
        {errors.email && <span className="text-danger">{errors.email.message}</span>}
        <label>password : </label>
        <input type="password" {...register("password")} />
        {errors.password && <span className="text-danger">{errors.password.message}</span>}
        <label>confirm password : </label>
        <input type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword.message}</span>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default HookFormWithZod;
