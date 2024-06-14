import React from "react";
import { useNavigate } from "react-router-dom";
import frame1 from "../assets/images/frame1.png";

function FrameOne() {
  const navigate = useNavigate();

  const handleGo = () => {
    navigate("/disclaimers");
  };

  return (
    <main
      onClick={handleGo}
      className="flex justify-center items-center h-screen bg-gradient-to-br from-[#F2F4F7] to-[#BCC8D6]"
    >
      <section className="text-center">
        <img src={frame1} alt="Frame1 img" />
        <h1 className="text-[#0A0A22] text-2xl font-semibold">Weather</h1>
        <p className="text-[#8B95A2] text-xl font-semibold">Forecast</p>
      </section>
    </main>
  );
}

export default FrameOne;
