import React from "react";

function FollowersCard({ username, email }) {
  return (
    <div className="flex items-center gap-x-3 bg-white rounded-lg p-6 shadow-md border border-[#dbdbdb]">
      <button className="bg-blue-300 rounded-full h-12 w-12 flex items-center justify-center">
        <p className="text-blue-700 text-lg font-semibold capitalize">
          {username[0]}
        </p>
      </button>
      <div className="flex flex-col gap-y-1 items-start">
        <p className="capitalize text-sm">{username}</p>
        <p className="capitalize text-sm text-gray-400">{email}</p>
      </div>
    </div>
  );
}

export default FollowersCard;
