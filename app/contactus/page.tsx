"use client";
import { useForm } from "react-hook-form";
import { Metadata } from "next";
import React from "react";

const contactusNosPagina = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    const res = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.ok) reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="...">
      <input {...register("name")} required placeholder="Name" />
      <input {...register("email")} type="email" required placeholder="Email" />
      <textarea {...register("message")} required placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  );
};

export default contactusNosPagina;
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with us for any inquiries or support.",
};
