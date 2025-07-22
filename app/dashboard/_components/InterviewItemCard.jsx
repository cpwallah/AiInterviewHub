import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const InterviewItemCard = ({ interview }) => {
  const router = useRouter();

  const onStart = () => {
    router.push('/dashboard/interview/' + interview?.mockId);
  };

  const onFeedbackPress = () => {
    router.push('/dashboard/interview/' + interview.mockId + "/feedback");
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-teal-50 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-100/50 animate-fade-in">
      <h2 className="text-xl font-bold text-teal-700 mb-2 bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent drop-shadow-md">
        {interview?.jobPostion}
      </h2>
      <p className="text-gray-600 text-sm mb-1">Experience: {interview?.jobExperience} Years</p>
      <p className="text-gray-500 text-xs mb-4">Created At: {interview?.createdAt}</p>
      <div className="mt-4 flex gap-3">
        <Button
          variant="outline"
          size="sm"
          className="text-teal-600 border-teal-600 hover:bg-teal-50 hover:text-teal-700 transition-colors duration-300"
          onClick={onFeedbackPress}
        >
          Feedback
        </Button>
        <Button
          size="sm"
          className="bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-300 transform hover:scale-105"
          onClick={onStart}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default InterviewItemCard