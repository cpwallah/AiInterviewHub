"use client"
import React from "react";
import Header from "../dashboard/_components/Header";
import { useRouter } from "next/navigation";

function Upgrade() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/dashboard");
  };
 const handleGethow=()=>{
    router.push("/how");
 }
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-100 to-gray-200 ">
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }

          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow { animation: spin-slow 4s linear infinite; }

          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .animate-pulse { animation: pulse 2s infinite; }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-float { animation: float 3s ease-in-out infinite; }

          @keyframes fade-in-out {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          .animate-fade-in-out { animation: fade-in-out 2.5s infinite; }

          .neon-glow {
            text-shadow: 0 0 10px rgba(20, 184, 166, 0.8), 0 0 20px rgba(34, 197, 94, 0.8);
          }

          @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.9; }
          }
          .animate-pulse-slow { animation: pulse-slow 3s ease infinite; }
        `}
      </style>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text mb-12">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1: Free Tier */}
          <div className="bg-gradient-to-br from-blue-100 to-teal-200 shadow-2xl rounded-2xl p-6 border-2 border-teal-300 hover:scale-105 hover:shadow-3xl transition-all duration-300 transform hover:rotate-1">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 animate-bounce-slow">
              <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-white bg-teal-700 bg-opacity-80 p-2 rounded mb-4">Free Tier</h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              Perfect for beginners to explore AI InterviewHub’s features.
            </p>
            <ul className="text-gray-700 list-disc list-inside mb-6">
              <li>5 practice interviews per month</li>
              <li>Basic feedback and rating</li>
              <li>Access to core question bank</li>
              <li>Community support</li>
            </ul>
            <button
              className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors duration-300"
              onClick={handleGetStarted}
            >
              Get Started Free
            </button>
          </div>

          {/* Card 2: Premium Tier */}
          <div className="bg-gradient-to-br from-purple-100 to-indigo-200 shadow-2xl rounded-2xl p-6 border-2 border-indigo-300 hover:scale-105 hover:shadow-3xl transition-all duration-300 transform hover:rotate-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 animate-pulse">
              <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v4h2zm0 6h-2v2h2z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-white bg-indigo-700 bg-opacity-80 p-2 rounded mb-4">Premium Tier</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-yellow-600 font-medium">
              Upcoming Soon
            </p>
            <ul className="text-gray-700 list-disc list-inside mb-6 opacity-70">
              <li>Unlimited practice interviews</li>
              <li>Advanced AI feedback</li>
              <li>Personalized coaching sessions</li>
              <li>Priority support</li>
            </ul>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 opacity-50 cursor-not-allowed">
              Notify Me
            </button>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700">
            Unlock your potential with AI InterviewHub! Start with the Free Tier today and stay tuned for the powerful Premium features coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Upgrade;