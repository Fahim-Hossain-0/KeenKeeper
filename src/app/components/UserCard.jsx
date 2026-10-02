import React from "react";
import Link from "next/link";

const UserCard = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC}/api/users`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const { result } = await res.json();

 const getStatusClass = (status) => {
  switch (status) {
    case "overdue":
      return "bg-red-500 text-white";

    case "upcoming":
      return "bg-amber-400 text-white";

    case "on_track":
      return "bg-emerald-800 text-white";

    case "almost_due":
      return "bg-amber-400 text-white";

    default:
      return "bg-slate-400 text-white";
  }
};



  const getStatusText = (status) => {
  switch (status) {
    case "overdue":
      return "Overdue";

    case "upcoming":
      return "Upcoming";

    case "on_track":
    case "on-track":
      return "On-Track";

    case "almost_due":
    case "almost-due":
      return "Almost Due";

    default:
      return status;
  }
};


  return (
    <section className="w-full">
  {/* Header */}
  <div className="mb-4 flex items-center justify-between">
    <div>
      <h1 className="text-sm font-semibold text-slate-800">
        Your Friends
        <span className="ml-1.5 font-normal text-slate-400">
          {result.length}
        </span>
      </h1>
    </div>
  </div>

  {/* Friends Grid */}
  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
    {result.map((user) => (
      <Link
        key={user._id || user.id}
        href={`/friends/${user._id || user.id}`}
        className="group block"
      >
        <article
          className="
            flex min-h-[145px] flex-col items-center
            rounded-lg
            border border-slate-100
            bg-white
            px-4 py-3.5
            text-center
            shadow-[0_2px_8px_rgba(15,23,42,0.06)]
            transition-all duration-200
            hover:-translate-y-0.5
            hover:border-slate-200
            hover:shadow-[0_6px_18px_rgba(15,23,42,0.09)]
          "
        >
          {/* Avatar */}
          <div className="avatar mb-1.5">
            <div
              className="
                h-[46px] w-[46px]
                overflow-hidden
                rounded-full
                bg-slate-100
                ring-1 ring-slate-200
                ring-offset-1
                ring-offset-white
              "
            >
              <img
                src={user.picture}
                alt={user.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h2 className="max-w-full truncate text-[12px] font-semibold leading-4 text-slate-800">
            {user.name}
          </h2>

          {/* Contact time */}
          <p className="mt-0.5 text-[9px] font-normal leading-3 text-slate-400">
            {user.days_since_contact}d ago
          </p>

          {/* Tags */}
          {user.tags?.length > 0 && (
            <div className="mt-2 flex min-h-[18px] flex-wrap justify-center gap-1">
              {user.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    bg-emerald-50
                    px-2 py-[3px]
                    text-[8px]
                    font-medium
                    leading-none
                    text-emerald-700
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Status */}
          <div className="mt-1.5">
            <span
              className={`
                inline-flex items-center
                rounded-full
                px-2.5 py-[4px]
                text-[8px]
                font-semibold
                leading-none
                ${getStatusClass(user.status)}
              `}
            >
              {getStatusText(user.status)}
            </span>
          </div>
        </article>
      </Link>
    ))}
  </div>
</section>

  );
};

export default UserCard;
