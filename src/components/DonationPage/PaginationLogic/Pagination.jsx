import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex items-center gap-4 pl-5 py-4">
      {/* Prev */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="border border-gray-300 h-10 w-14 rounded-full flex items-center justify-center hover:bg-[#00715D] hover:text-white disabled:opacity-40 cursor-pointer"
      >
        <FaArrowLeftLong />
      </button>

      {/* Page numbers */}
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`h-10 w-10 rounded-full border font-medium cursor-pointer flex items-center justify-center
              ${
                currentPage === page
                  ? "bg-[#00715D] text-white"
                  : "border-gray-400 hover:bg-[#00715D] hover:text-white"
              }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="border border-gray-300 h-10 w-14 rounded-full flex items-center justify-center hover:bg-[#00715D] hover:text-white disabled:opacity-40 cursor-pointer"
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default Pagination;