"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic, StopCircle } from "lucide-react";
import { toast } from "sonner";
// import { chatSession } from "@/utils/GeminiAIModal";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { chatSession } from "@/utils/GeminiAIModel";

const RecordAnswerSection = ({
  mockInterviewQuestion,
  activeQuestionIndex,
  interviewData,
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });
  useEffect(() => {
    results.map((result) =>
      setUserAnswer((prevAns) => prevAns + result?.transcript)
    );
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswer();
    }
  }, [userAnswer]);

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
      // if (userAnswer?.length < 10) {
      //   setLoading(false)
      //   toast("Error while saving your answer,please record again");
      //   return;
      // }
    } else {
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
    console.log(userAnswer, "########");
    setLoading(true);
    const feedbackPrompt =
      "Question:" +
      mockInterviewQuestion[activeQuestionIndex]?.question +
      ", User Answer:" +
      userAnswer +
      ",Depends on question and user answer for given interview question " +
      " please give use rating for answer out of 10 and feedback as area of improvement if any" +
      " in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";
    console.log(
      "🚀 ~ file: RecordAnswerSection.jsx:38 ~ SaveUserAnswer ~ feedbackPrompt:",
      feedbackPrompt
    );
    const result = await chatSession.sendMessage(feedbackPrompt);
    console.log(
      "🚀 ~ file: RecordAnswerSection.jsx:46 ~ SaveUserAnswer ~ result:",
      result
    );
    const mockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");

    console.log(
      "🚀 ~ file: RecordAnswerSection.jsx:47 ~ SaveUserAnswer ~ mockJsonResp:",
      mockJsonResp
    );
    const JsonfeedbackResp = JSON.parse(mockJsonResp);
    const resp = await db.insert(UserAnswer).values({
      mockIdRef: interviewData?.mockId,
      question: mockInterviewQuestion[activeQuestionIndex]?.question,
      correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
      userAns: userAnswer,
      feedback: JsonfeedbackResp?.feedback,
      rating: JsonfeedbackResp?.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD-MM-YYYY"),
    });

    if (resp) {
      toast("User Answer recorded successfully");
      setUserAnswer("");
      setResults([]);
    }
    setResults([]);
    setLoading(false);
  };

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-100 to-gray-200 animate-gradient-shimmer flex items-center justify-center flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.1)_0%,_rgba(29,78,216,0.1)_70%)] opacity-50"></div>
      <div className="max-w-4xl w-full mx-auto p-4 sm:p-6 lg:p-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text neon-glow mb-6 text-center animate-pulse-slow">
          Record Your Answer
        </h2>
        <div className="p-4 sm:p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-teal-200/50 animate-fade-in-slow h-full">
          <div className="relative w-full max-w-lg mx-auto">
            <Image
              src="/webcam.png"
              width={250}
              height={250}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50"
              alt="Webcam placeholder"
            />
            <Webcam
              style={{ height: 400, width: "100%", zIndex: 10 }}
              mirrored={true}
            />
          </div>
          <Button
            disabled={loading}
            variant="outline"
            className="mt-6 w-full sm:w-auto bg-gradient-to-r from-teal-600 to-green-500 text-white hover:from-teal-700 hover:to-green-600 transition-all duration-300 shadow-md hover:shadow-lg rounded-xl px-6 py-3"
            onClick={StartStopRecording}
          >
            {isRecording ? (
              <h2 className="text-white flex items-center gap-2 animate-pulse">
                <StopCircle /> Stop Recording...
              </h2>
            ) : (
              <h2 className="flex items-center gap-2">
                <Mic /> Record Answer
              </h2>
            )}
          </Button>
          {error && (
            <div className="mt-4 text-center text-red-600">
              <p>Error: {error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecordAnswerSection;