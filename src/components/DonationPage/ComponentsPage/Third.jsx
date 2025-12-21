import DonateCard from "./SubComponents/3a";
import s1 from "../../../assets/images/Donation/8.png";
import s2 from "../../../assets/images/Donation/9.png";
import s3 from "../../../assets/images/Donation/10.png";
import s4 from "../../../assets/images/Donation/11.png";

export default function Third() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        {/* <h2 className="text-6xl font-lobster font-semibold text-gray-900 leading-snug"> */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lobster font-semibold text-gray-900 leading-snug">
          Special Donation
          <br />
          <span className="font-bold">For Kids</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <DonateCard title="Trucker cap" price="$55.00" image={s1} />
          <DonateCard
            title="Rubber boots"
            price="$50.00"
            image={s2}
            highlighted
          />
          <DonateCard title="shart kids" price="$45.00" image={s3} />
          <DonateCard title="Sport shaker" price="$35.00" image={s4} />
        </div>
      </div>
    </div>
  );
}
