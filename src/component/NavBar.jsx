import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="bg-white flex justify-between basis-[40%] p-7">
      <div>
        <Image src={logo} />
      </div>

      <div className="basis-[60%] hidden lg:block">
        <div className="flex flex-row justify-end ">
          <div className="text-black squada-regular text-3xl px-[2%] py-[1%]">
            About us
          </div>
          <div className="text-black squada-regular text-3xl px-[2%] py-[1%]">
            Our Initatives
          </div>
          <div className="text-black squada-regular text-3xl px-[2%] py-[1%]">
            Our Focus Area
          </div>
          <div className="text-black squada-regular text-3xl px-[2%] py-[1%]">
            Get Involved
          </div>
          <div className="text-black squada-regular text-3xl px-[2%] py-[1%]">
            Contact us
          </div>
        </div>
      </div>

      <div className="basis-[10%] flex justify-end">
        <button className="btn btn-warning border rounded-full hidden lg:block klima-regular">
          ❤ Donate Now
        </button>
        <FontAwesomeIcon
          icon={faBarsStaggered}
          size="10x"
          className="block md:hidden"
        />
      </div>
    </div>
  );
}

export default NavBar;
