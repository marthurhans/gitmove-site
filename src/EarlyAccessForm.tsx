// 📁 src/EarlyAccessForm.tsx
import { useState } from "react";

export default function EarlyAccessForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/meokobzr", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
    }
  };

return (
  <div className="mt-8 max-w-md mx-auto text-center">
    {submitted ? (
      <div className="space-y-2">
        <p className="text-green-500 font-semibold">Thanks for signing up!</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm underline text-gray-400 hover:text-white transition"
        >
          Submit another email?
        </button>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full px-4 py-2 border border-white rounded bg-gray-800 text-white placeholder-gray-400
            focus:bg-white focus:text-black focus:placeholder-black
            hover:bg-white hover:text-black hover:placeholder-black transition"
        />
        <input
            type="text"
            name="nickname"
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full px-4 py-2 border border-white rounded bg-gray-800 text-white placeholder-gray-400
            focus:bg-white focus:text-black focus:placeholder-black
            hover:bg-white hover:text-black hover:placeholder-black transition"
        />
        <button
          type="submit"
          className="group px-6 py-2 rounded hover:bg-white hover:text-black transition border border-white bg-gray-800 text-white font-semibold"
        >
          Join Early Access*
        </button>
      </form>
    )}
  </div>
);

}
