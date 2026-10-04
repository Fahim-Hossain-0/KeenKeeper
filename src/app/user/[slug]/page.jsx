import CallBtn from "@/components/CallBtn";
import Image from "next/image";
import React from "react";

const UserDetails = async ({ params }) => {
  const { slug } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC}/api/users/${slug}`);
  const result= await res.json();
  const user = result.data
  
  return (
    <main className="min-h-screen bg-[#f7f9fa] px-4 py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-[215px_1fr]">

        {/* ================= LEFT COLUMN ================= */}
        <aside className="space-y-3">

          {/* User Info */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm">


<Image
  src={user.picture}
  alt={user.name}
  width={56}
  height={56}
  className="mx-auto h-14 w-14 rounded-full object-cover"
/>

            <h2 className="mt-2 text-sm font-semibold text-[#263238]">
              {user.name}
            </h2>

            {/* Status */}
            <span
              className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${
                user.status === "overdue"
                  ? "bg-red-500 text-white"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {user.status}
            </span>

            {/* Tags */}
            <div className="mt-2 flex flex-wrap justify-center gap-1">
              {user.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-green-50 px-2 py-0.5 text-[9px] font-medium uppercase text-green-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bio */}
            <p className="mt-3 text-[10px] italic leading-4 text-gray-500">
              "{user.bio}"
            </p>

            {/* Email */}
            <p className="mt-1 text-[9px] text-gray-400">
              Preferred: email
            </p>
          </div>

          {/* Snooze */}
          <button className="flex h-8 w-full items-center justify-center gap-2 rounded border border-gray-200 bg-white text-[11px] text-gray-700 transition hover:bg-gray-50">
            🔔
            <span>Snooze 2 Weeks</span>
          </button>

          {/* Archive */}
          <button className="flex h-8 w-full items-center justify-center gap-2 rounded border border-gray-200 bg-white text-[11px] text-gray-700 transition hover:bg-gray-50">
            ▣
            <span>Archive</span>
          </button>

          {/* Delete */}
          <button className="flex h-8 w-full items-center justify-center gap-2 rounded border border-gray-200 bg-white text-[11px] text-red-500 transition hover:bg-red-50">
            🗑
            <span>Delete</span>
          </button>
        </aside>

        {/* ================= RIGHT COLUMN ================= */}
        <section className="space-y-3">

          {/* ================= STATS ================= */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

            {/* Days Since Contact */}
            <div className="flex h-20 flex-col items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-[#28564b]">
                {user.days_since_contact}
              </h3>

              <p className="mt-1 text-[10px] text-gray-500">
                Days Since Contact
              </p>
            </div>

            {/* Goal */}
            <div className="flex h-20 flex-col items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-[#28564b]">
                {user.goal}
              </h3>

              <p className="mt-1 text-[10px] text-gray-500">
                Goal (Days)
              </p>
            </div>

            {/* Next Due */}
            <div className="flex h-20 flex-col items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-[#28564b]">
                {new Date(user.next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </h3>

              <p className="mt-1 text-[10px] text-gray-500">
                Next Due
              </p>
            </div>
          </div>

          {/* ================= RELATIONSHIP GOAL ================= */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">

            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-[#28564b]">
                Relationship Goal
              </h3>

              <button className="rounded border border-gray-200 px-3 py-1 text-[10px] text-gray-700 hover:bg-gray-50">
                Edit
              </button>
            </div>

            <p className="mt-3 text-xs text-gray-600">
              Connect every{" "}
              <span className="font-semibold text-gray-800">
                {user.goal} days
              </span>
            </p>
          </div>

          {/* ================= QUICK CHECK-IN ================= */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">

            <h3 className="text-sm font-medium text-[#28564b]">
              Quick Check-In
            </h3>

            <CallBtn user={user}></CallBtn>

          </div>

        </section>
      </div>
    </main>

  );
};

export default UserDetails;
