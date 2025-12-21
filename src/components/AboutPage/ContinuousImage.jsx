import React from "react";
import si1 from "../../assets/images/si1.png";
import si2 from "../../assets/images/si2.png";
import si3 from "../../assets/images/si3.png";
import si4 from "../../assets/images/si4.png";

const ContinuousImage = () => {
  return (
    <div className="group w-full overflow-hidden y-10 mb-14">
      <div className="flex w-max gap-4 animate-[scroll_16s_linear_infinite] group-hover:[animation-play-state:paused]">
        <img src={si1} alt="si1" className="rounded-2xl" />
        <img src={si2} alt="si2" className="rounded-2xl" />
        <img src={si3} alt="si3" className="rounded-2xl" />
        <img src={si4} alt="si4" className="rounded-2xl" />
        <img src={si1} alt="si1" className="rounded-2xl" />
        <img src={si2} alt="si2" className="rounded-2xl" />
        <img src={si3} alt="si3" className="rounded-2xl" />
        <img src={si4} alt="si4" className="rounded-2xl" />
        <img src={si1} alt="si1" className="rounded-2xl" />
        <img src={si2} alt="si2" className="rounded-2xl" />
        <img src={si3} alt="si3" className="rounded-2xl" />
        <img src={si4} alt="si4" className="rounded-2xl" />
        <img src={si1} alt="si1" className="rounded-2xl" />
        <img src={si2} alt="si2" className="rounded-2xl" />
        <img src={si3} alt="si3" className="rounded-2xl" />
        <img src={si4} alt="si4" className="rounded-2xl" />
      </div>
    </div>
  );
};

export default ContinuousImage;