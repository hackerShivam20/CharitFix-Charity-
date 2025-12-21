const BlogListCard = ({image, date, title}) => {
  return (
    <div className="w-90 bg-white rounded-xl border border-[#E5E7EB] p-4">
          <img
            src={image}
            alt="author"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-sm text-[#6B7280]">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
              <span>{date}</span>
            </div>

            <h3 className="text-[15px] font-semibold text-[#111827] leading-snug">
              {title}
            </h3>
          </div>
    </div>
  );
};

export default BlogListCard;