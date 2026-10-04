"use client";
import React from "react";
import { toast } from "sonner";

const CallBtn = ({ user }) => {
  const { name, next_due_date } = user;

const handleCheckIn = async (type) => {
try {
const response = await fetch("/api/callHistory", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
name,
next_due_date,
data: new Date(),
type,
}),
});

  const result = await response.json();

  if (!response.ok) {
    toast.error(result.message || "Failed to save check-in");
    return;
  }

  toast.success(`${type} check-in saved successfully!`);
} catch (error) {
  toast.error("Something went wrong!");
  console.error(error);
}

};  



  const handleCallBtn = async() => {
     const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST', // 1. Specify the HTTP method
      headers: {
        'Content-Type': 'application/json' // 2. Tell the server you are sending JSON
      },
      body: JSON.stringify({name,next_due_date,data: new Date(),type:'call'}) // 3. Convert your data to a string
    });
  };
  const handleTextBtn = async() => {
     const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST', // 1. Specify the HTTP method
      headers: {
        'Content-Type': 'application/json' // 2. Tell the server you are sending JSON
      },
      body: JSON.stringify({name,next_due_date,data: new Date(),type:"text"}) // 3. Convert your data to a string
    });
  };
  const handleVideoBtn = async() => {
     const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST', // 1. Specify the HTTP method
      headers: {
        'Content-Type': 'application/json' // 2. Tell the server you are sending JSON
      },
      body: JSON.stringify({name,next_due_date,data: new Date(),type:"video"}) // 3. Convert your data to a string
    });
  };

  return (
    <div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {/* Call */}
        <button
          onClick={()=>handleCheckIn("call")}
          className="flex h-14 flex-col items-center justify-center rounded-md border border-gray-200 bg-[#f8fafb] text-gray-700 transition hover:bg-gray-100"
        >
          <span className="text-lg">♧</span>
          <span className="mt-1 text-[11px]">Call</span>
        </button>

        {/* Text */}
        <button
          onClick={()=>handleCheckIn('text')}
          className="flex h-14 flex-col items-center justify-center rounded-md border border-gray-200 bg-[#f8fafb] text-gray-700 transition hover:bg-gray-100"
        >
          <span className="text-lg">▣</span>
          <span className="mt-1 text-[11px]">Text</span>
        </button>

        {/* Video */}
        <button
          onClick={()=>handleCheckIn('video')}
          className="flex h-14 flex-col items-center justify-center rounded-md border border-gray-200 bg-[#f8fafb] text-gray-700 transition hover:bg-gray-100"
        >
          <span className="text-lg">▣</span>
          <span className="mt-1 text-[11px]">Video</span>
        </button>
      </div>
    </div>
  );
};

export default CallBtn;
