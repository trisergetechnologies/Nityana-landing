
"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const subscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="px-5 py-5">
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl bg-[#800000] px-6 py-8 text-white md:flex-row md:px-12">

        <div className="flex items-center gap-5">
          <Mail size={45} strokeWidth={1.5} className="text-[#f3c36d]" />

          <div>
            <h2 className="font-serif text-2xl font-bold">
              Subscribe to Our Newsletter
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Get the latest offers and healthy tips!
            </p>
          </div>
        </div>

        <form
          onSubmit={subscribe}
          className="flex w-full max-w-lg gap-3"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="min-w-0 flex-1 rounded-full bg-white px-5 py-3 text-sm text-gray-800 outline-none"
          />

          <button
            type="submit"
            className="flex items-center gap-2 rounded-full bg-[#e9b75b] px-6 py-3 text-sm font-bold text-[#421a0c] transition hover:bg-[#f4ca7c]"
          >
            Subscribe <ArrowRight size={16} />
          </button>
        </form>

        {message && (
          <p className="text-sm text-[#f4d58f]">{message}</p>
        )}
      </div>
    </section>
  );
}
