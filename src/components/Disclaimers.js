import React, { useState } from "react";
import frame2 from "../assets/images/frame2.png";
import frame3 from "../assets/images/frame3.png";
import frame4 from "../assets/images/frame4.png";
import frame5 from "../assets/images/frame5.png";
import frame2navigation from "../assets/images/frame2navigation.png";
import frame3navigation from "../assets/images/frame3navigation.png";
import frame4navigation from "../assets/images/frame4navigation.png";
import frame5navigation from "../assets/images/frame5navigation.png";
import frame2button from "../assets/images/frame2button.png";
import frame3button from "../assets/images/frame3button.png";
import frame4button from "../assets/images/frame4button.png";
import frame5button from "../assets/images/frame5button.png";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    img: frame2,
    navigation: frame2navigation,
    button: frame2button,
    title: "Detailed Hourly Forecast",
    description: "Get in-depth weather information.",
  },
  {
    img: frame3,
    navigation: frame3navigation,
    button: frame3button,
    title: "Real-Time Weather Map",
    description: "Watch the progress of the precipitation to stay informed",
  },
  {
    img: frame4,
    navigation: frame4navigation,
    button: frame4button,
    title: "Weather Around the World",
    description: "Add any location you want and swipe easily to chnage.",
  },
  {
    img: frame5,
    navigation: frame5navigation,
    button: frame5button,
    title: "Detailed Hourly Forecast",
    description: "Get in - depth weather information.",
  },
];

function Disclaimers() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (step < steps.length - 1) {
      setStep((prevStep) => prevStep + 1);
    } else {
      navigate("/home");
    }
  };

  const handleSkip = () => {
    navigate("/home");
  };

  const currentStep = steps[step];

  return (
    <main className="flex flex-col items-center h-[760px] bg-gradient-to-b from-[#484B5B] to-[#2C2D35] overflow-hidden relative">
      <section className="flex flex-col justify-center items-center relative mt-10 mb-5 w-[300px] h-[300px]">
        <img src={currentStep.img} alt={`Frame${step + 1} img`} />
        <img
          className="absolute bottom-5"
          src={currentStep.navigation}
          alt={`Frame${step + 1} Navigation img`}
        />
        <p onClick={handleSkip} className="absolute top-0 right-0 text-white">
          Skip
        </p>
      </section>
      <section className="bg-white w-[493px] h-[493px] rounded-full flex flex-col items-center absolute bottom-[-98px]">
        <h1 className="w-[250px] text-[#0A0A22] text-xl font-semibold text-center mt-20 mb-5">
          {currentStep.title}
        </h1>
        <p className="w-[244px] text-[#8B95A2] text-base font-normal text-center mb-12">
          {currentStep.description}
        </p>
        <img
          src={currentStep.button}
          alt={`Frame${step + 1} Button img`}
          onClick={handleNextStep}
          className="cursor-pointer"
        />
      </section>
    </main>
  );
}

export default Disclaimers;
