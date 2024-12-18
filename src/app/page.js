"use client";

import { useRouter } from "next/router";

export default function Home() {
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <main className="text-center">
        {/* GasMate Text */}
        <h1 className="text-6xl font-bold text-gray-800 mb-6 drop-shadow-lg">
          Gas<span className="text-gray-500">Mate</span>
        </h1>
        {/* Description */}
        <p className="text-lg text-gray-600 mb-8">
          Find the cheapest gas stations on your route.
        </p>
        {/* Button */}
        <button
          onClick={() => router.push("main-menu/page.js")} // Replace with your page path
          className="rounded-full bg-gray-800 text-white text-lg px-6 py-3 shadow-md hover:bg-gray-700 transition-all"
        >
          Get Started
        </button>
      </main>
    </div>
  );
}
