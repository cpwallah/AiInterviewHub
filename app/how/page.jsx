import React from "react";
import Header from "../dashboard/_components/Header";

function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-100 to-gray-200 ">
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text mb-12">
          How AI InterviewHub Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1: Sign In */}
          <div className="bg-gradient-to-br from-blue-100 to-teal-200 shadow-2xl rounded-2xl p-6 border-2 border-teal-300 hover:scale-105 hover:shadow-3xl transition-all duration-300 transform hover:rotate-1">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 animate-bounce-slow">
              <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-white bg-teal-700 bg-opacity-80 p-2 rounded mb-4">Step 1: Secure Sign-In</h2>
            <p className="text-gray-800 leading-relaxed">
              Begin with a secure sign-in using Clerk. Use your email or social account to create a profile, then enjoy a seamless redirect to your personalized dashboard to start your interview prep journey.
            </p>
          </div>

          {/* Card 2: Create an Interview */}
          <div className="bg-gradient-to-br from-green-100 to-emerald-200 shadow-2xl rounded-2xl p-6 border-2 border-emerald-300 hover:scale-105 hover:shadow-3xl transition-all duration-300 transform hover:-rotate-1">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 animate-spin-slow">
              <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-2 13l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-white bg-emerald-700 bg-opacity-80 p-2 rounded mb-4">Step 2: Customize Interview</h2>
            <p className="text-gray-800 leading-relaxed">
              Add a new interview from your dashboard. Input your experience, tech stack (e.g., React, Python), and target role (e.g., DevOps) to craft a tailored practice session for your career goals.
            </p>
          </div>

          {/* Card 3: Grant Permissions */}
          <div className="bg-gradient-to-br from-purple-100 to-indigo-200 shadow-2xl rounded-2xl p-6 border-2 border-indigo-300 hover:scale-105 hover:shadow-3xl transition-all duration-300 transform hover:rotate-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 animate-pulse">
              <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v4h2zm0 6h-2v2h2z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-white bg-indigo-700 bg-opacity-80 p-2 rounded mb-4">Step 3: Enable Permissions</h2>
            <p className="text-gray-800 leading-relaxed">
              Enter the lobby and grant camera and microphone access. This allows our AI to record your responses securely, with all data encrypted for your privacy and peace of mind.
            </p>
          </div>

          {/* Card 4: Take the Interview */}
          <div className="bg-gradient-to-br from-yellow-100 to-amber-200 shadow-2xl rounded-2xl p-6 border-2 border-amber-300 hover:scale-105 hover:shadow-3xl transition-all duration-300 transform hover:-rotate-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 animate-float">
              <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-white bg-amber-700 bg-opacity-80 p-2 rounded mb-4">Step 4: Answer Questions</h2>
            <p className="text-gray-800 leading-relaxed">
              Dive into the test environment with five custom questions. Record your answers using the provided tools, with the AI analyzing your performance in a realistic interview simulation.
            </p>
          </div>

          {/* Card 5: Receive Feedback */}
          <div className="bg-gradient-to-br from-pink-100 to-rose-200 shadow-2xl rounded-2xl p-6 border-2 border-rose-300 hover:scale-105 hover:shadow-3xl transition-all duration-300 transform hover:rotate-1">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 animate-fade-in-out">
              <svg className="w-6 h-6 text-rose-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v4h2zm0 6h-2v2h2z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-white bg-rose-700 bg-opacity-80 p-2 rounded mb-4">Step 5: Get Feedback</h2>
            <p className="text-gray-800 leading-relaxed">
              After completing the interview, receive an overall rating and detailed feedback. Our AI provides insights on your strengths, areas to improve, and tailored tips to excel in future interviews.
            </p>
          </div>

          {/* Card 6: Improve & Repeat */}
          <div className="bg-gradient-to-br from-violet-100 to-purple-200 shadow-2xl rounded-2xl p-6 border-2 border-purple-300 hover:scale-105 hover:shadow-3xl transition-all duration-300 transform hover:-rotate-1">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 animate-spin-reverse">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2zm0 8h-2v2h-2v-2H9v-2h2v-4H9V9h2v2h2v2h2v-2h-2v-2h2V9h-2v2h-2v4h2v2h2v-2h2v2h-2v2h-2z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-white bg-purple-700 bg-opacity-80 p-2 rounded mb-4">Step 6: Enhance Skills</h2>
            <p className="text-gray-800 leading-relaxed">
              Use the feedback to improve and schedule more interviews. With unlimited practice sessions, track your progress and gain confidence to ace real-world interviews with top employers.
            </p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700">
            Ready to master your interviews? Join AI InterviewHub today and transform your skills with cutting-edge AI technology!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;