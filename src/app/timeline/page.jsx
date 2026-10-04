
import React from "react";
import Image from "next/image";
import TimelineFilter from "@/components/TimelineFilter";
// import TimelineFilter from "./TimelineFilter";

const TimelinePage = async ({ searchParams }) => {
  const params = await searchParams;
  const type = params?.type || "all";

  // Build API URL
  const apiParams = new URLSearchParams();

  if (type !== "all") {
    apiParams.set("type", type);
  }

  const queryString = apiParams.toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC}/api/callHistory${
      queryString ? `?${queryString}` : ""
    }`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch call history");
  }

  const result = await res.json();
  const data = result.result || [];

  return (
    <main className="min-h-screen bg-[#f7f9fa] px-4 py-8">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#202b36]">
              Timeline
            </h1>

            <p className="mt-1 text-xs text-gray-400">
              Recent activity history
            </p>
          </div>

          {/* Activity Filter */}
          <TimelineFilter />
        </div>

        {/* Activity count */}
        <div className="mt-5 mb-3 flex items-center justify-between">
          <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
            Activity
          </p>

          <p className="text-[11px] text-gray-400">
            {data.length} {data.length === 1 ? "activity" : "activities"}
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          {data.length > 0 ? (
            data.map((item) => (
              <TimelineItem key={item._id} item={item} />
            ))
          ) : (
            <div className="rounded-lg border border-dashed border-gray-200 bg-white px-4 py-12 text-center">
              <p className="text-sm font-medium text-gray-400">
                No activities found
              </p>

              <p className="mt-1 text-[11px] text-gray-300">
                Try selecting a different activity type.
              </p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
};

const TimelineItem = ({ item }) => {
  const type = item.type?.toLowerCase();

  const icon =
    type === "call"
      ? "/images/call.png"
      : type === "text"
      ? "/images/text.png"
      : "/images/video.png";

  const date = new Date(item.data).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="group flex items-center rounded-lg border border-gray-200 bg-white px-3 py-3 shadow-sm transition hover:border-gray-300 hover:shadow-md">

      {/* Icon */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-50">
        <Image
          src={icon}
          alt={type || "activity"}
          width={21}
          height={21}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="ml-3 min-w-0 flex-1">
        <p className="text-[11px] text-gray-500">
          <span className="font-semibold capitalize text-[#263238]">
            {type}
          </span>

          <span className="mx-1.5 text-gray-300">
            with
          </span>

          <span className="font-medium text-gray-700">
            {item.name}
          </span>
        </p>

        <p className="mt-1 text-[9px] text-gray-400">
          {date}
        </p>
      </div>

      {/* Activity badge */}
      <div className="hidden sm:block">
        <span className="rounded-full bg-gray-50 px-2.5 py-1 text-[9px] font-medium capitalize text-gray-400">
          {type}
        </span>
      </div>

    </div>
  );
};

export default TimelinePage;