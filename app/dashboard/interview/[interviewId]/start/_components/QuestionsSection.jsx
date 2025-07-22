import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-US";
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
  };

  return (
    mockInterviewQuestion && (
      <div className="p-4 sm:p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-teal-200/50 animate-fade-in-slow h-full">
        <style>
          {`
            .question-text {
              color: #1a202c !important; /* Darker text for contrast */
              text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.8); /* White shadow for readability */
              font-weight: 600; /* Slightly bolder for clarity */
            }
            .question-bg {
              background-color: #edf2f7 !important; /* Lighter background for inactive questions */
              color: #2d3748 !important; /* Darker text for inactive */
            }
            .question-active {
              color: #ffffff !important; /* White text for active */
            }
          `}
        </style>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-6">
          {mockInterviewQuestion.map((question, index) => (
            <h2
              key={index}
              className={`p-2 rounded-full text-xs sm:text-sm text-center cursor-pointer transition-all duration-300 hover:shadow-md ${activeQuestionIndex === index ? "bg-gradient-to-r from-teal-500 to-green-500 question-active shadow-lg" : "question-bg hover:bg-gray-300"}`}
              onClick={() => {/* Add navigation logic if needed */}}
            >
              Question #{index + 1}
            </h2>
          ))}
        </div>
        <h2 className="my-4 text-sm sm:text-lg question-text">
          {mockInterviewQuestion[activeQuestionIndex]?.question || "No question available"}
        </h2>
        <Volume2
          className="cursor-pointer text-teal-600 hover:text-teal-800 transition-colors duration-300"
          onClick={() =>
            textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question || "")
          }
          size={24}
        />
        <div className="border rounded-lg p-4 sm:p-5 bg-teal-50/80 my-6 shadow-inner animate-float-slow">
          <h2 className="flex gap-2 items-center text-teal-700">
            <Lightbulb className="text-yellow-500" />
            <strong>Note:</strong>
          </h2>
          <p className="text-sm sm:text-base text-gray-800 mt-2 question-text">
            Click on the record answer button when you want to answer the question. At the end of the interview, we will provide feedback along with the correct answer for each question and your answer for comparison.
          </p>
        </div>
      </div>
    )
  );
}

export default QuestionsSection;