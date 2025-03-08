"use client";
import Link from "next/link";
import { useState } from "react";
// When using the Tauri API npm package:
import { invoke } from "@tauri-apps/api/core";

export default function About() {
  const [name, setName] = useState("");
  const [greetMessage, setGreetMsg] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="text-5xl text-center">
      <h1 className="mt-6">Send Message</h1>

      <br></br>
      <div className="flex justify-center">
        <Link
          href="/"
          className="w-3xl block px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Visit Home
        </Link>
      </div>

      <br></br>
      <div className="div text-2xl text-blue-500">
        This is a desktop app with RUST and NextJS
      </div>
      <div className="text-center">
        <br></br>
        <br></br>
        <div>
          <input
            onChange={(e) => setName(e.currentTarget.value)}
            className="rounded-2xl w-3xl p-4 border-3"
            type="text"
            placeholder="Type your name"
          />
          <br></br>
          <br></br>
        </div>
        <button
          onClick={greet}
          className="w-3xl px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
        <br></br>
        <br></br>
        <div>
          <h2>Name: {name}</h2>
          <h3>Result ....</h3>
          {greetMessage}
        </div>
      </div>
    </div>
  );
}
