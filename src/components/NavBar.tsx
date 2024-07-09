import { navigate } from "astro/virtual-modules/transitions-router.js";
import { useState, useRef, useEffect } from "react";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";

const NavBar = ({
  children,
  siteName,
}: {
  children: React.ReactNode;
  siteName: string;
}) => {
  const [open, setOpen] = useState(false);

  const mobnavRef = useRef<HTMLElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const postionBottomNav = () => {
    const width = window.innerWidth;
    const remainingwidth = () => {
      if (width > 900) {
        const r = (width - 900) / 2;
        return r;
      } else {
        return 0;
      }
    };
    const rmw = remainingwidth() + "px";
    if (mobnavRef.current) {
      mobnavRef.current.style.right = rmw;
    }
  };

  const toggleNav = () => {
    if (open) {
      mobnavRef.current?.classList.remove("flex");
      mobnavRef.current?.classList.add("hidden");
      inputRef.current?.blur();
    } else {
      mobnavRef.current?.classList.remove("hidden");
      mobnavRef.current?.classList.add("flex");
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    postionBottomNav();
    const listener = () => {
      postionBottomNav();
    };
    const openNavigation = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        mobnavRef.current?.classList.toggle("hidden");
        mobnavRef.current?.classList.toggle("flex");
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keyup", openNavigation);
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return (
    <header className="w-full bg-blue-700 *:text-white inline-flex *:max-w-[900px]">
      <div className="mx-auto z-[100] font-semibold bg-blue-700 inline-flex px-2 py-4 justify-between items-center w-full h-fit">
        <a className="nav" href="./">
          <h1>{siteName}</h1>
        </a>
        <div className="inline-flex justify-center items-center gap-2">
          <button
            onClick={() => {
              setOpen(!open);
              toggleNav();
            }}
            className="inline-flex menu gap-2 items-baseline text-xl menu transition-all duration-700 ease-in-out z-[100] justify-center"
          >
            {!open ? <MdOutlineMenu /> : <MdOutlineClose />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav
        id="mobilenav"
        ref={mobnavRef}
        className={`fixed text-xl p-2 flex-col items-center justify-center w-full h-full z-[1000] hidden`}
      >
        <div className="from-black/80 to-black/50 bg-gradient-to-tr w-full h-fit min-h-96 rounded-md px-8 py-4 flex justify-end flex-col">
          <form
            onSubmit={(e) => {
              e.preventDefault();
               navigate(`/${inputRef.current?.value}`);
            }}
          >
            <input
              type="text"
              name="s"
              id="search"
              ref={inputRef}
              className="bg-transparent px-4 py-2 rounded-full outline-none ring-0 focus:ring-2 border border-white my-4"
              placeholder="Search"
            />
          </form>
          <h6 className="text-gray-400 px-2 text-sm my-2">Categories</h6>
          <div className="flex flex-col justify-center items-start gap-2 text-base w-fit">
            {children}
          </div>
          <h5 className="text-gray-400 mt-2 text-sm px-2 font-mono">
            Esc: Close
          </h5>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
