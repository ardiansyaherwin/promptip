import React from "react";

const LoadingFeed = () => {
  return (
    <div className="flex gap-6">
      <div className="w-full min-h-screen col-span-4 mt-20 space-y-4 lg:col-span-1">
        <div
          className={`relative h-[167px] rounded-xl bg-gray-400 animate-pulse`}
        />
      </div>
      <div className="w-full min-h-screen col-span-4 mt-20 space-y-4 lg:col-span-1">
        <div
          className={`relative h-[167px] rounded-xl bg-gray-400 animate-pulse`}
        />
      </div>
      <div className="w-full min-h-screen col-span-4 mt-20 space-y-4 lg:col-span-1">
        <div
          className={`relative h-[167px] rounded-xl bg-gray-400 animate-pulse`}
        />
      </div>
    </div>
  );
};

export default LoadingFeed;
