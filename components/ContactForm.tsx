"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto p-4"
    >
      <input
        className="w-full p-2 border rounded bg-white"
        placeholder="Your Name"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <p className="text-main-orange">{errors.name.message}</p>}

      <input
        type="email"
        className="w-full p-2 border rounded bg-white"
        placeholder="Your Email"
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/, message: "Invalid email address" },
        })}
      />
      {errors.email && (
        <p className="text-main-orang">{errors.email.message}</p>
      )}

      <textarea
        className="w-full p-2 border rounded bg-white"
        placeholder="Your Message"
        rows={5}
        {...register("message", { required: "Message is required" })}
      />
      {errors.message && (
        <p className="text-main-orang">{errors.message.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-main-orange w-full text-white px-4 py-2 rounded"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>

      {status === "success" && <p className="text-green-600">Message sent!</p>}
      {status === "error" && (
        <p className="text-main-orang">Failed to send message.</p>
      )}
    </form>
  );
}
