"use client";

import { useRouter, useSearchParams } from "next/navigation";

const TimelineFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentType = searchParams.get("type") || "all";

  const handleChange = (e) => {
    const type = e.target.value;

    if (type === "all") {
      router.push("/timeline");
    } else {
      router.push(`/timeline?type=${type}`);
    }
  };

  return (
    <select
      name="type"
      value={currentType}
      onChange={handleChange}
      className="h-8 w-32 rounded border border-gray-200 bg-white px-2 text-[10px] text-gray-500 outline-none"
    >
      <option value="all">All activities</option>
      <option value="call">Call</option>
      <option value="text">Text</option>
      <option value="video">Video</option>
    </select>
  );
};

export default TimelineFilter;