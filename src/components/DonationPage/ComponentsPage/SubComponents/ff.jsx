import React from "react";

const FF = ({ item, image }) => {
  return (
    // <div className="border rounded-lg p-2 flex items-center justify-between cursor-pointer">
    <div className="border rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 bg-gray-100 rounded-md">
          <img
            src={image}
            alt={item}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <span className="text-sm text-gray-700">{item}</span>
      </div>

      <input
        type="checkbox"
        className="accent-teal-600 size-5 border border-[#00715D]"
      />
    </div>
  );
};

export default FF;
