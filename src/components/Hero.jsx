import React from "react";
import Typed from "react-typed";

function openWhatsApp() {
  const whatsappNumber = '0094769084193'; // Replace with your WhatsApp number
  const message = 'Hello, I have a question.'; // Optional: Replace with your default message

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Open the WhatsApp link in a new tab or window
  window.open(whatsappLink, '_blank');
}

const Hero = () => {
  return (
    <div className="text-gray-300">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00ced1] font-bold p-2">
          Together we are Strong and Happy Always!
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          HAPPY BIRTHDAY
        </h1>
        <div>
         
          <Typed
            className="text-[#00ced1] md:pl-4 md:text-5xl sm:text-4xl text-xl font-bold pl-2"
            strings={["LOVING", "BOSSY", "ANGRY", "sudu bichcha"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="p-4 font-bold text-gray-500">
          Love You <span className="text-[#00ced1]">Sudu Bichcha</span>, May your special day be a reflection of the beauty and kindness you radiate.
        </p>
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            You are my most Prioritized thing
          </p>
        <button onClick={openWhatsApp} className="bg-[#00ced1] py-3 w-[300px] text-black rounded-md font-medium my-6 mx-auto px-6">
          Call me for Much Love
        </button>
      </div>
    </div>
  );
};

export default Hero;
