import React, { useState } from "react";
import Modal from "react-modal";
import BG2 from "./assets/bg-2.png";
import SidekickLogo from "./assets/sidekicklogo.svg?react";
import SAAS from "./assets/SAAS.svg?react";
import Mobility from "./assets/mobility.svg?react";
import Control from "./assets/control.svg?react";
import PartnerForm from "./PartnerForm";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full relative bg-[#25252E] flex justify-end items-center pr-16 py-4">
        <div className="absolute left-40">
          <SidekickLogo />
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:underline font-bold text-white">
            Product
          </a>
          <a href="#" className="hover:underline font-bold text-white">
            Offerings
          </a>
          <a href="#" className="hover:underline font-bold text-white">
            Institution Login
          </a>
          <a href="#" className="hover:underline font-bold text-white">
            Contact Us
          </a>
        </div>
        <button className="bg-[#18F27A] px-4 py-2 rounded-full text-black font-medium ml-10">
          Get the App
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] xl:h-[90vh] flex flex-col justify-center items-start p-6 bg-[url('./assets/bg-1.png')] bg-cover">
        <div className="pl-10 xl:pl-40 2xl:pl-80">
          <div>
            <h2 className="text-5xl xl:text-6xl font-bold text-[#18F27A]">
              Let us be your
            </h2>
            <h2 className="text-5xl xl:text-6xl font-bold text-[#18F27A]">
              SideKick!
            </h2>
          </div>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="mt-4 bg-[#18F27A] text-black px-6 py-3 rounded-full cursor-pointer"
          >
            Partner with Us
          </button>
        </div>
        <img
          src={BG2}
          className="absolute xs:max-h-[60%] h-full right-0 bottom-0"
        />
      </section>

      {/* Why Partner Section */}
      <section className="py-16 px-8 text-center bg-white text-black">
        <h3 className="text-2xl font-bold">Why Partner With Us?</h3>
        <div className="flex flex-wrap justify-center mt-8 gap-8">
          <div className="w-64 flex flex-col items-center">
            <SAAS />
            <h4 className="text-lg font-semibold mt-4">SAAS</h4>
            <p>Scooter as a service</p>
          </div>
          <div className="w-64 flex flex-col items-center">
            <Mobility />
            <h4 className="text-lg font-semibold mt-4">Enhanced Mobility</h4>
            <p>
              Provide reliable, hassle-free rides that boost productivity and
              satisfaction
            </p>
          </div>
          <div className="w-64 flex flex-col items-center">
            <Control />
            <h4 className="text-lg font-semibold mt-4">Centralized Control</h4>
            <p>Manage all your transportation needs in one place</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#25252E] text-center py-12 px-6">
        <h3 className="text-2xl font-bold text-[#18F27A]">
          Ride Smooth. Ride Worry-Free.
        </h3>
        <p className="mt-4">
          With SideKick, you're never stuck. If you need help, we're here -
          fast, efficient, and always ready.
        </p>
        <button className="mt-6 bg-[#18F27A] px-6 py-3 rounded-lg text-black">
          Get the App
        </button>
      </footer>

      <Modal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={false}
        style={{
          content: {
            maxHeight: "80vh",
            height: "fit-content",
            alignSelf: "center",
            borderColor: "#787878",
            background: "#ffffff",
            width: "fit-content",
            margin: "auto",
          },
          overlay: {
            zIndex: 99,
            background: "rgba(24,24,27,0.52)",
          },
        }}
      >
        <PartnerForm closeModal={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
};

export default App;
