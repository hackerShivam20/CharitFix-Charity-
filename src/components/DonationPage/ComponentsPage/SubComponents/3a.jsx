export default function DonateCard({ title, price, image }) {
  return (
    // <div className=" group rounded-xl border bg-white overflow-hidden transition border-gray-200 hover:border hover:border-green-700">
    <div className="group rounded-xl border bg-white overflow-hidden transition-all duration-300 border-gray-200 hover:border-green-700 hover:shadow-lg">
      {/* Top Curve */}
      <div className="h-24 bg-gray-100 rounded-b-full group-hover:bg-green-700"></div>

      {/* Image */}
      <div className="flex justify-center -mt-12">
        <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pt-4 pb-6 text-center">
        <h3 className="font-bold text-2xl text-gray-800">{title}</h3>
        <p className="text-lg text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur adipiscing.
        </p>
        <p className="text-[#ED1E2B] text-xl font-bold mt-3">{price}</p>

        {/* <button className="mt-4 bg-[#00715D] text-white text-sm p-15 py-2 rounded-md hover:bg-green-800 transition"> */}
        <button className="mt-4 bg-[#00715D] text-white text-sm px-6 py-2 rounded-md hover:bg-green-800 transition">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
