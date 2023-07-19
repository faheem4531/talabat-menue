import SideNavbar from "../_components/SideNavbar/SideNavbar";
import Image from "next/image";
import heroImg from "../../public/heroImg.png";
import HamburgerMenu from "../../public/Vector1.png";
import searchIcon from "../../public/Vector2.png";
import FlagIcon from "../../public/Vector4.png";

export default function Test() {
  return (
    <div>
      <div className="flex justify-between p-4 items-center relative z-[1]">
        <div>
          <SideNavbar />
        </div>
        <div className="flex items-center">
          <div className="text-white text-1xl">Ar</div>
          <div className="ml-2">
            <Image src={FlagIcon} alt="FlagIcon" />
          </div>
        </div>
      </div>
      <div
        className="h-64 absolute top-0 z-[-1] heroImgMain"
        // style={{
        //   backgroundColor: "rgba(0, 0, 0, 0.37)",
        // }}
      >
        <Image src={heroImg} alt="Restaurant Placeholder" className="heroImg" />
      </div>
      <div className="container z-10">
        <div className="relative top-[162px] flex w-96 m-auto">
          {/* <AiOutlineSearch className="absolute bottom-5 left-[12px] top-1/2 h-5 w-5 -translate-y-1/2 transform fill-[#57606E]" /> */}
          <Image
            src={searchIcon}
            alt="hamburger-menu-icon"
            className="absolute bottom-5 left-[12px] top-1/2 h-3 w-3 -translate-y-1/2 transform "
          />
          <input
            // ref={searchRef}
            className=" h-[33px] w-full rounded-5px border border-transparent px-10  text-xs font-sm shadow-10 transition-all duration-300 ease-in-out focus:border-red focus:outline-none rounded-md shadow-lg"
            placeholder="What are you looking for"
            // placeholder={t("lookingFor")}
            // onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          />
          <Image
            src={HamburgerMenu}
            alt="hamburger-menu-icon"
            className="absolute bottom-5 right-[12px] top-2.5 h-3 w-3 "
          />
        </div>
      </div>
    </div>
  );
}
