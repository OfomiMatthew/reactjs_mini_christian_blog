import { useState } from "react";
import banner from "../assets/images/theCross.jpg";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  const tags = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Christian Living",
    },
    {
      id: 3,
      name: "Relationships",
    },
    {
      id: 4,
      name: "The Word and Prayer",
    },
    {
      id: 5,
      name: "Discipleship",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex justify-center items-center mt-5 flex-col px-[100px]">
      <img src={banner} alt="cross" className=" rounded-2xl h-[600px]" />
      <div className="bg-white shadow-lg p-5 rounded-lg w-[550px] mt-[-35px] mx-[25%] flex justify-start items-center gap-4">
        <IoSearchOutline className="text-[20px] text-gray-500" />
        <input type="text" placeholder="Search" className="outline-none" />
      </div>

      <div className="flex gap-5 justify-start items-center mt-[30px]">
        {tags.map((item, index) => {
          return (
            <ul
              onClick={() => {
                setActiveIndex(index);
              }}
              key={item.id}
              className={`${
                index == activeIndex
                  ? "bg-red-500 p-2 rounded-3xl text-white"
                  : null
              } hover:scale-110 mx-[10px] hover:border-[1px] border-red-500 p-2 transition-all duration-100 ease-in-out rounded-full`}
            >
              <li className="cursor-pointer">{item.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
