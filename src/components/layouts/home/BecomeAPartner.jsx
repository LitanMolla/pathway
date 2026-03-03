import React from "react";
import Container from "../../Container";
import { FaLongArrowAltRight } from "react-icons/fa";
import round from "/src/assets/roundblur.svg";
import { Link } from "react-router";

const BecomeAPartner = () => {
  return (
    <>
      <section>
        <Container>
          <div className="py-5 md:py-16 px-8 md:px-22 text-center md:text-left bg-primary rounded-2xl md:flex justify-between">
            <p className="text-white font-extrabold text-3xl">
              Become A Partner
            </p>
            <div className="relative mt-5 md:mt-0 flex justify-center md:flex-none">
              <div
                className="absolute md:-right-10 -top-5 md:-top-11 animate-spin"
                style={{ animationDuration: "6s" }}
              >
                <img src={round} alt="" className="size-20 md:size-33" />
              </div>
              <Link to={"/become-a-partner"}>
                <button
                  className={
                    "relative z-10 py-3 lg:py-3 px-3 lg:px-4 text-[12px] md:text-[14px] text-base font-medium lg:font-bold rounded-xl bg-secondary text-white cursor-pointer hover:text-blue-400 transition duration-300"
                  }
                >
                  <div className="flex items-center">
                    <p className="font-bold tracking-widest">Apply Now </p>
                    <FaLongArrowAltRight />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BecomeAPartner;
