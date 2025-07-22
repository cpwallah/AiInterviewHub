"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/dashboard");
  };
  const handleGethow = () => {
    router.push("/how");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-100 to-gray-100 animate-gradient-x overflow-hidden">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center backdrop-blur-md bg-white/30 shadow-lg border-b border-teal-200/40 animate-fade-in-slow">
        <h1 className="text-lg sm:text-xl font-bold text-transparent bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text neon-glow">
          AIInterview Hub
        </h1>
        <button
          onClick={handleGethow}
          className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          How It Works
        </button>
      </header>

      {/* Hero & Content Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex flex-col items-center text-center animate-slide-up">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 bg-gradient-to-r from-teal-700 to-blue-800 bg-clip-text text-transparent neon-glow mb-6">
          Master Interviews with AI
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-10 leading-relaxed">
          Elevate your skills with personalized mock interviews. Input your
          role, experience, and tech stack for a tailored 5-question session
          with instant feedback.
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 glow-button"
        >
          Get Started
        </button>

        {/* Benefits */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-200/50">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">
              Personalized Prep
            </h3>
            <p className="text-gray-600">Tailored to your role and skills.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-200/50">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">
              Instant Feedback
            </h3>
            <p className="text-gray-600">Real-time performance insights.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-200/50">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">
              AI Precision
            </h3>
            <p className="text-gray-600">Advanced simulation technology.</p>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-16 w-full bg-gradient-to-br from-teal-50/80 via-blue-100/50 to-gray-100/80 backdrop-blur-lg rounded-xl p-6 sm:p-8 shadow-2xl border border-teal-200/60 animate-float">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6 bg-gradient-to-r from-teal-700 to-blue-800 bg-clip-text text-transparent neon-glow">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/90 backdrop-blur-md p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-teal-200/50 animate-glow-border">
              <h3 className="text-lg sm:text-xl font-semibold text-teal-800 mb-2">
                Basic
              </h3>
              <p className="text-gray-700 mb-3 font-medium">Free</p>
              <ul className="text-gray-600 space-y-2">
                <li>5 Questions</li>
                <li>Basic Feedback</li>
              </ul>
              <button
                onClick={handleGetStarted}
                className="mt-4 bg-teal-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-teal-700 transition-all duration-300 w-full shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Start Free
              </button>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-teal-200/50 animate-glow-border">
              <h3 className="text-lg sm:text-xl font-semibold text-teal-800 mb-2">
                Pro
              </h3>
              <p className="text-gray-700 mb-3 font-medium">Premium</p>
              <ul className="text-gray-600 space-y-2">
                <li>Unlimited Interviews</li>
                <li>Detailed Feedback</li>
                <li>Priority Support</li>
              </ul>
              <button className="mt-4 bg-teal-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-teal-700 transition-all duration-300 w-full shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Upcoming Soon
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-600 bg-white/30 backdrop-blur-md rounded-t-lg shadow-inner">
        <p>© 2025 AIInterview Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
