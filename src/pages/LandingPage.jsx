import React, { useContext, useState } from "react";
import "../assets/css/animations.css";
import { ExploreContext } from "../context/MyContext";

export default function LandingPage() {
  const { explore, setExplore } = useContext(ExploreContext);
  const [max, setMax] = useState(false);

  const TimeToExplore = () => {
    setTimeout(() => {
      setExplore(!explore);
    }, 1500);

    setMax(!max);
  };

  return (
    <section className=" w-full h-full flex justify-center items-center ">
      <div
        className={` ball absolute landing-animation w-[100px] h-[100px] bg-rose-600 rounded-full mx-auto flex justify-center items-center cursor-pointer ${
          max ? "zoom-in" : ""
        } `}
        onClick={TimeToExplore}
      >
        <span className=" explore-text">Explore</span>
      </div>
    </section>
  );
}
