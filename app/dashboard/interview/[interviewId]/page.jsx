// "use client"
// import { Button } from '@/components/ui/button';
// import { MockInterview } from '@/utils/schema';
// import {  WebcamIcon } from 'lucide-react';
// import Webcam from "react-webcam";
// import React, { useEffect, useState } from 'react'
// import { db } from '@/utils/db';
// import { eq } from 'drizzle-orm';

// function Interview({params}) {
//     const [interviewdata,setinterviewdata]=useState();
//     const [webcamenabled,setwebcamenabled]=useState(false);
//     useEffect(()=>{
//         console.log(params);
//         GetInterviewDetails();
//     },[])
//     const GetInterviewDetails=async()=>{
//         const result =await db.select().from(MockInterview).where(eq(MockInterview.mockId,params.interviewId));
//         setinterviewdata(result[0]);
//         console.log(result)
//     }
//   return (
//     <div className='my-10 flex justify-center flex-col items-center'>
//         <h2 className='font-bold text-2xl'>Lets Get Started</h2>
//         <div className='grid grid-cols-1 md:grid-cols-2'>
//               <div>
//             {webcamenabled?<Webcam onUserMedia={()=>setwebcamenabled(true)}
//                 onUserMediaError={()=>setwebcamenabled(false)} style={{
//                     height:300,
//                     width:300
//                 }} mirrored={true}/>
//             :<><WebcamIcon className='h-75 w-full  my-7 p-20  bg-secondary rounded-lg border'/>
//             <Button onClick={()=>setwebcamenabled(true)}>Enabled Web Camera and Microphone</Button>
//             </>
//   }
//         </div>
//         <div className='flex flex-col my-5'><h2 className='text-lg'>
//             <strong>Job Role/Job Position:</strong>{interviewdata.jobPostion}</h2>
//             <h2 className='text-lg'>
//             <strong>Job Description/Tech Stack:</strong>{interviewdata.jobDesc}</h2>
//             <h2 className='text-lg'>
//             <strong>Years of experience:</strong>{interviewdata.jobExperience}</h2>
//             </div>
            
//         </div>
//         </div>
      
        
//   )
// }

// export default Interview

"use client";
import { Button } from '@/components/ui/button';
import { MockInterview } from '@/utils/schema';
import { WebcamIcon } from 'lucide-react';
import Webcam from "react-webcam";
import React, { useEffect, useState, useRef } from 'react';
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm';
import Link from 'next/link';

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState(null);
  const [webcamEnabled, setWebcamEnabled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const audioContextRef = useRef(null);
  const windSourceRef = useRef(null);

  useEffect(() => {
    if (params?.interviewId) {
      GetInterviewDetails();
    }

    // Initialize AudioContext
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();

    // Keyboard sound effect
    const handleKeyDown = () => {
      const oscillator = audioContextRef.current.createOscillator();
      const gainNode = audioContextRef.current.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(1000, audioContextRef.current.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.1);
      oscillator.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);
      oscillator.start();
      oscillator.stop(audioContextRef.current.currentTime + 0.1);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (windSourceRef.current) {
        windSourceRef.current.stop();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [params]);

  useEffect(() => {
    // Wind sound effect when webcam is enabled
    if (webcamEnabled && audioContextRef.current) {
      const bufferSize = audioContextRef.current.sampleRate * 2;
      const buffer = audioContextRef.current.createBuffer(1, bufferSize, audioContextRef.current.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.05; // White noise for wind effect
      }

      windSourceRef.current = audioContextRef.current.createBufferSource();
      windSourceRef.current.buffer = buffer;
      windSourceRef.current.loop = true;
      const gainNode = audioContextRef.current.createGain();
      gainNode.gain.setValueAtTime(0.05, audioContextRef.current.currentTime);
      windSourceRef.current.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);
      windSourceRef.current.start();
    } else if (windSourceRef.current) {
      windSourceRef.current.stop();
      windSourceRef.current = null;
    }
  }, [webcamEnabled]);

  const GetInterviewDetails = async () => {
    try {
      setLoading(true);
      const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId, params.interviewId));
      if (result.length > 0) {
        setInterviewData(result[0]);
      } else {
        setError("Interview data not found.");
      }
    } catch (err) {
      console.error("Error fetching interview details:", err);
      setError("Failed to load interview details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700 mb-12 animate-fade-in">
          Begin Your AI-Powered Interview
        </h2>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-600 p-6 bg-red-50 rounded-2xl shadow-md">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Webcam Section */}
            <div className="flex flex-col items-center bg-white p-10 rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-3xl bg-opacity-95 backdrop-blur-md">
              {webcamEnabled ? (
                <div className="relative group">
                  <Webcam
                    audio
                    height={480}
                    width={480}
                    onUserMedia={() => setWebcamEnabled(true)}
                    onUserMediaError={() => setWebcamEnabled(false)}
                    className="rounded-3xl border-4 border-indigo-200 shadow-inner transition-transform duration-300 group-hover:scale-105"
                    mirrored={true}
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full animate-pulse">
                    Live
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <WebcamIcon className="h-48 w-48 text-indigo-400 my-8 animate-pulse" />
                  <Button
                    onClick={() => setWebcamEnabled(true)}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Activate Webcam & Microphone
                  </Button>
                </div>
              )}
            </div>

            {/* Interview Details Section */}
            <div className="bg-white p-10 rounded-3xl shadow-2xl bg-opacity-95 backdrop-blur-md transition-all duration-500 hover:shadow-3xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 animate-slide-in">Interview Details</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-indigo-600 font-medium mr-2">Job Role:</span>
                  <span className="text-gray-700">
                    {interviewData?.jobPostion || "Not specified"}
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-indigo-600 font-medium mr-2">Tech Stack:</span>
                  <span className="text-gray-700">
                    {interviewData?.jobDesc || "Not specified"}
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-indigo-600 font-medium mr-2">Experience:</span>
                  <span className="text-gray-700">
                    {interviewData?.jobExperience || "Not specified"}
                  </span>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl animate-slide-in-delayed">
                <p className="text-gray-700 text-center text-base font-medium">
                  To begin your AI-powered mock interview, please enable your webcam and microphone. The interview consists of 5 carefully curated questions designed to assess your skills. Upon completion, you will receive a detailed report card with feedback. Please note that your video and audio will be recorded for evaluation purposes.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-delayed {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-slide-in {
          animation: slide-in 0.6s ease-out 0.2s both;
        }
        .animate-slide-in-delayed {
          animation: slide-in-delayed 0.6s ease-out 0.4s both;
        }
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
      <div className='flex justify-end items-end'>
        <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
        <Button>Start Interview</Button>
        </Link>
      </div>
    </div>
  );
}

export default Interview;