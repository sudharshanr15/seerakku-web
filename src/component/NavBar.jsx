"use client";
import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";

function NavBar() {

  return (
    <div className="bg-white flex justify-between basis-[40%] p-7">
      <div>
        <Image src={logo} />
      </div>

      <div className="basis-[60%] hidden lg:block">
        <div className="flex flex-row justify-end ">
          <div className="text-black font-squada-one text-3xl px-[2%] py-[1%] hover:cursor-pointer" onClick={() => router.push("/about_us")}>
            About us
          </div>
          <div className="text-black font-squada-one text-3xl px-[2%] py-[1%] hover:cursor-pointer" onClick={() => router.push("/")}>
            Our Initatives
          </div>
          <div className="text-black font-squada-one text-3xl px-[2%] py-[1%] hover:cursor-pointer">
            Our Focus Area
          </div>
          <div className="text-black font-squada-one text-3xl px-[2%] py-[1%] hover:cursor-pointer">
            Get Involved
          </div>
          <div className="text-black font-squada-one text-3xl px-[2%] py-[1%] hover:cursor-pointer">
            Contact us
          </div>
        </div>
      </div>

      <div className="basis-[10%] flex justify-end">
        <button className="btn btn-warning border rounded-full hidden lg:block klima-regular hover:bg-accent border-hidden">
          ❤ Donate Now
        </button>
        <div className="drawer drawer-end  overflow-hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-ghost text-black visible md:hidden"
            >
              <FontAwesomeIcon
                icon={faBarsStaggered}
                size="2x"
                className="block md:hidden"
              />
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

            <ul className="menu p-4 w-80 h-full bg-white">
              <li>
                <div className="flex justify-betwen items-center h-1/2 ">
                  <Image src={logo} />
                  <button
                    type="button"
                    className="btn text-white block md:hidden ml-4 btn-sm w-1/4 "
                  >
                    <label htmlFor="my-drawer-4">
                      <FontAwesomeIcon
                        icon={faXmark}
                        className="basis-1/4 "
                        size="2x"
                      />
                    </label>
                  </button>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-ghost text-black flex justify-center text-subheading font-squada-one my-5 "
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-ghost text-black flex justify-center text-subheading font-squada-one my-5 "
                >
                  Our Initiatives
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-ghost text-black flex justify-center text-subheading font-squada-one my-5"
                >
                  Our Focus Area
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-ghost text-black flex justify-center text-subheading font-squada-one my-5"
                >
                  Get Involved
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-ghost text-black flex justify-center text-subheading font-squada-one my-5"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button className="btn btn-warning border rounded-full w-1/2 mx-auto pt-5 klima-regular hover:bg-accent border-hidden">
                  ❤ Donate Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
