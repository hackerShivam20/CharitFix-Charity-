import React, { useState } from "react";

export default function second() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full bg-pink mt-12">
      <div className="max-w-5xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border-b">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-4 sm:px-6 py-2 text-sm sm:text-lg rounded-t-md transition ${
              activeTab === "description"
                ? "bg-gray-200 text-gray-900"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("info")}
            className={`px-6 py-2 text-lg rounded-t-md transition ${
              activeTab === "info"
                ? "bg-gray-200 text-gray-900"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Additional Information
          </button>
          <button
            onClick={() => setActiveTab("review")}
            className={`px-6 py-2 text-lg rounded-t-md transition ${
              activeTab === "review"
                ? "bg-gray-200 text-gray-900"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Product Review
          </button>
        </div>

        {/* Content */}
        <div className="py-6 text-[#666666] text-sm leading-relaxed">
          {activeTab === "description" && (
            <div className="space-y-4">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          )}

          {activeTab === "info" && (
            <div className="space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          )}

          {activeTab === "review" && (
            <div className="space-y-4">
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
