
import { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";

const NavBar = ({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) => {
  const [searhOpen, setSearchOpen] = useState(false);
  const toggle = () => {
    setSearchOpen(!searhOpen);
  };
 

  const searchBox = useRef<HTMLDivElement>(null);
  const searchEntry = useRef<HTMLInputElement>(null);
  useEffect(() => {
    window.addEventListener("mousedown", (e) => {
      if (searchBox.current) {
        const box = searchBox.current.getBoundingClientRect();

        if (
          e.clientX < box.left ||
          e.clientX > box.right ||
          e.clientY < box.top ||
          e.clientY > box.bottom
        ) {
          setSearchOpen(false);
        }
      }
    });
  });
  return (
    <div className="w-full z-[500] ">
      <div className="z-[500] p-2 inline-flex w-full justify-between bg-black/50 text-white">
        <div className="inline-flex justify-between mx-auto w-full max-w-[900px]">
          <h1 className="text-2xl text-center">{title}</h1>
          <button className="text-2xl" onClick={toggle}>
            {searhOpen ? <RxCross2 /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Search Modal */}
      <div
        className={` absolute ${
          searhOpen ? "flex" : "hidden"
        } z-[300]  flex-col items-center justify-center text-white w-full h-full top-0  left-0 right-0`}
      >
        <div ref={searchBox} className="w-full inline-flex justify-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toggle();
              console.log(searchEntry.current?.value);
            }}
            className="p-8 bg-black inline-flex items-center rounded-md w-full max-w-[900px]"
          >
            <input
              className=" bg-transparent text-2xl grow caret-white focus:outline-none"
              tabIndex={-1}
              placeholder="Search"
              ref={searchEntry}
            />
            <IoMdSearch className="text-2xl" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
