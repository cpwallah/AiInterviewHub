"use client"
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const Feedback = ({ params }) => {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db.select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    // Deduplicate questions, keeping the answer with longer user response
    const uniqueQuestions = {};
    result.forEach(item => {
      if (!uniqueQuestions[item.question] || 
          (item.userAns?.length > uniqueQuestions[item.question].userAns?.length)) {
        uniqueQuestions[item.question] = item;
      }
    });

    // Convert to array and take only first 5 questions
    const deduplicatedList = Object.values(uniqueQuestions).slice(0, 5);
    console.log("🚀 ~ file: page.jsx:11 ~ GetFeedback ~ deduplicatedList:", deduplicatedList);
    setFeedbackList(deduplicatedList);
  };

  // Calculate overall rating based on 5 questions
  const calculateOverallRating = () => {
    if (feedbackList.length === 0) return 0;
    const totalRating = feedbackList.reduce((sum, item) => sum + (parseInt(item.rating) || 0), 0);
    console.log("Sum of ratings:", totalRating);
    const maxPossiblePerQuestion = 10; // Each question is out of 10
    const normalizedRating = (totalRating / (5 * maxPossiblePerQuestion)) * 10;
    return Math.round(normalizedRating * 10) / 10; // Round to 1 decimal place
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-100 to-gray-100 animate-gradient-shimmer relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.1)_0%,_rgba(29,78,216,0.1)_70%)] opacity-50"></div>
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-10 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-gradient-to-r from-teal-500 via-green-600 to-gold-400 bg-clip-text neon-glow mb-6 animate-pulse-slow">
          Congratulations!
        </h2>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent drop-shadow-lg mb-8">
          Your Interview Feedback
        </h2>
        {feedbackList?.length === 0 ? (
          <h2 className="text-xl sm:text-2xl font-medium text-green-500 bg-green-50/80 p-3 rounded-lg shadow-md mb-8">
            No Interview Feedback Available
          </h2>
        ) : (
          <>
            <h2 className="text-lg sm:text-xl text-teal-700 bg-teal-50/80 p-3 rounded-lg shadow-md mb-6">
              Overall Interview Rating: <strong className="text-gold-600">{calculateOverallRating()}/10</strong> (Based on 5 questions)
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-8">Review your responses and expert feedback for growth.</p>
            {feedbackList && feedbackList.map((item, index) => (
              <Collapsible key={index} className="mt-6">
                <CollapsibleTrigger className="p-4 sm:p-5 flex justify-between items-center bg-white/90 backdrop-blur-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-teal-200/50 animate-float-slow">
                  <span className="text-base sm:text-lg font-medium text-gray-900 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
                    {item.question}
                  </span>
                  <ChevronsUpDown className="h-5 sm:h-6 text-gold-500 transition-transform duration-300" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-3 animate-slide-down-smooth">
                  <div className="flex flex-col gap-3 p-4 sm:p-5 bg-white/85 backdrop-blur-lg rounded-xl shadow-lg border border-gold-200/50">
                    <h3 className="text-red-500 font-semibold p-2 rounded-lg bg-red-50/80 shadow-inner glow-border">
                      Rating: <strong>{item.rating || "N/A"}</strong>
                    </h3>
                    <p className="p-2 rounded-lg bg-red-50/80 text-sm sm:text-base text-red-900 shadow-inner">
                      <strong>Your Answer:</strong> {item.userAns || "Not Attempted"}
                    </p>
                    <p className="p-2 rounded-lg bg-green-50/80 text-sm sm:text-base text-green-900 shadow-inner">
                      <strong>Correct Answer:</strong> {item.correctAns || "N/A"}
                    </p>
                    <p className="p-2 rounded-lg bg-blue-50/80 text-sm sm:text-base text-teal-800 shadow-inner">
                      <strong>Feedback:</strong> {item.feedback || "No feedback available for unattempted questions."}
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </>
        )}
        <Button
          className="mt-8 sm:mt-10 bg-gradient-to-r from-teal-600 to-gold-500 text-white px-6 sm:px-8 py-3 rounded-xl hover:from-teal-700 hover:to-gold-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 w-full sm:w-auto"
          onClick={() => router.replace('/dashboard')}
        >
          Go Home
        </Button>
      </div>
    </div>
  );
}

export default Feedback;