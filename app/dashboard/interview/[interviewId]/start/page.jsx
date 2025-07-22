"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import QuestionsSection from "./_components/QuestionsSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function StartInterview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  // Unwrap params using React.use
  const { interviewId } = React.use(params);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, interviewId));
    const jsonMockResp = JSON.parse(result[0].jsonMockResp);
    console.log(jsonMockResp);
    setMockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-100 to-gray-200 animate-gradient-shimmer relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.1)_0%,_rgba(29,78,216,0.1)_70%)] opacity-50"></div>
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 relative z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text neon-glow mb-8 text-center animate-pulse-slow">
          Interview Session
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6

        ">
          <div className="md:order-1">
            <QuestionsSection
              mockInterviewQuestion={mockInterviewQuestion}
              activeQuestionIndex={activeQuestionIndex}
            />
          </div>
          <div className="md:order-2">
            <RecordAnswerSection
              mockInterviewQuestion={mockInterviewQuestion}
              activeQuestionIndex={activeQuestionIndex}
              interviewData={interviewData}
            />
          </div>
        </div>
        <div className="mt-8 flex justify-center md:justify-end gap-4">
          {activeQuestionIndex > 0 && (
            <Button
              onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
              className="bg-gradient-to-r from-teal-600 to-green-500 text-white hover:from-teal-700 hover:to-green-600 transition-all duration-300 shadow-md hover:shadow-lg rounded-xl px-6 py-3"
            >
              Previous Question
            </Button>
          )}
          {activeQuestionIndex !== (mockInterviewQuestion?.length - 1) && (
            <Button
              onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
              className="bg-gradient-to-r from-teal-600 to-green-500 text-white hover:from-teal-700 hover:to-green-600 transition-all duration-300 shadow-md hover:shadow-lg rounded-xl px-6 py-3"
            >
              Next Question
            </Button>
          )}
          {activeQuestionIndex === mockInterviewQuestion?.length - 1 && (
            <Link href={`/dashboard/interview/${interviewData?.mockId}/feedback`}>
              <Button className="bg-gradient-to-r from-red-600 to-pink-500 text-white hover:from-red-700 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg rounded-xl px-6 py-3">
                End Interview
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default StartInterview;