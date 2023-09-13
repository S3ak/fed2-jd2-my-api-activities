"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(4).max(50),
});

import { useForm } from "react-hook-form";
import FormField from "@/components/form-field";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "kminchelle",
      password: "0lelplR",
    },
  });

  const onSubmit = async (data) => {
    let response;

    axios
      .post(
        "https://dummyjson.com/auth/login",
        {
          ...data,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <FormField label="username" errorMessage={errors?.username?.message}>
        <input
          className="w-full max-w-xs input input-bordered"
          {...register("username", { required: true })}
        />
      </FormField>

      {/* include validation with required or other standard HTML validation rules */}
      <FormField label="password" errorMessage={errors?.password?.message}>
        <input
          className="w-full max-w-xs input input-bordered"
          {...register("password", { required: true })}
        />
      </FormField>

      {/* errors will return when field validation fails  */}
      {errors?.password && (
        <p className="text-md">
          Something went wrong! Please check the information you entered
        </p>
      )}

      <input className="mt-2 btn" type="submit" />
    </form>
  );
}
