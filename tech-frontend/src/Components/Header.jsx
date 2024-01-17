import logo from "../assets/images/bible.jpg";
import { IoLogoYoutube } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <img
        src={logo}
        alt="bible"
        className="w-[80px] h-[80px] rounded-full m-[10px]"
      />
      <ul className="flex gap-4 md:gap-12 mx-[0px]">
        <li className="hover:font-bold hover:text-red-400 cursor-pointer ">Home</li>
        <li className="hover:font-bold  hover:text-red-400 cursor-pointer ">About Us</li>
        <li className="hover:font-bold hover:text-red-400 cursor-pointer ">Contact Us</li>
      </ul>
      <button className="bg-red-500 flex justify-center gap-3 items-center rounded-3xl text-gray-950 hover:text-white border-none mx-[5px] ">
        <span className="hover:scale-90 flex justify-center gap-3 items-center">Subscribe<IoLogoYoutube className="text-[20px]" /></span> 
      </button>
    </div>
  );
};

export default Header;
