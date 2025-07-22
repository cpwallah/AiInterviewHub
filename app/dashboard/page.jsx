import { UserButton } from '@clerk/nextjs';
import React from 'react';
import Header from './_components/Header';
import AddNewInterview from './_components/AddNewInterview';
import InterviewList from './_components/InterviewList';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-teal-50 to-blue-100 animate-gradient-flow p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-slow">
          <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-gradient-to-r from-teal-700 to-blue-800 bg-clip-text drop-shadow-lg animate-text-glow">
            Dashboard
          </h1>
          <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Elevate your interview preparation with AI-powered mock sessions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-teal-200/50 hover:shadow-3xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
            <AddNewInterview />
          </div>
        </div>
        <div className="mt-16">
          
          <InterviewList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard