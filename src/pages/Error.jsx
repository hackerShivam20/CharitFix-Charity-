import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-[#00715D] px-6">
      {/* Animated Image */}


      {/* Animated Text */}
      <motion.h1
        className="text-6xl font-extrabold text-[#00715D] mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-gray-600 text-lg text-center max-w-md mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Oops! The page you are looking for doesn’t exist or has been moved.
      </motion.p>

      {/* Home Button */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/"
          className="px-8 py-3 rounded-full bg-[#069c80] text-white font-semibold shadow-lg hover:bg-[#00715D] transition"
        >
          Go to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Error;
