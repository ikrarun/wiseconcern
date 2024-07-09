import { useState, useEffect, useRef } from "react";
import { MdOutlineMenu, MdOutlineClose, MdOutlineSearch } from "react-icons/md";

const NavBar = ({
  children,
  siteName,
}: {
  children: React.ReactNode;
  siteName: string;
}) => {
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [text, setText] = useState("fffgfg");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: any) => {
      if (e.key === 'Tab') {
          e.preventDefault();
      }
      if (e.key === "/") {
        setDialogOpen(true);
        return;
      }
      if (e.key === "Escape") {
        setText("");
        setDialogOpen(false);
        return;
      }
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <header className="w-full bg-blue-700 *:text-white inline-flex *:max-w-[900px]">
      <div className="mx-auto z-[100] font-semibold bg-blue-700 inline-flex px-2 py-4 justify-between items-center w-full h-fit">
        <a href="./">
          <h1>{siteName}</h1>
        </a>
        <div className="inline-flex justify-center items-center gap-2">
          <nav className="hidden sm:inline-flex gap-2 items-baseline justify-center">
            {children}
          </nav>

          {/* Search Option */}
          <button
            onClick={() => {
              setDialogOpen(true);
            }}
            className="p-2 open bg-white rounded-full"
          >
            <MdOutlineSearch className="text-blue-700 rounded-full" />
          </button>
          {/* Moblie Nav */}
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className="inline-flex menu sm:hidden gap-2 items-baseline text-xl menu transition-all duration-700 ease-in-out z-[100] justify-center"
          >
            {!open ? <MdOutlineMenu /> : <MdOutlineClose />}
          </button>

          {/* Dialog */}
          <dialog id="searchDialog" open={dialogOpen}>
            <div className="flex grow fixed top-0 left-0 h-full w-full mx-auto flex-col p-2 gap-2 w-fullselect-none bg-white/10 backdrop-blur-sm items-center justify-center ">
              <form
                className="flex border  max-w-[600px] min-w-[300px] w-full border-blue-700 rounded-md p-4 flex-col gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <h4 className="text-gray-700">Enter Your Query</h4>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => {
                    e.preventDefault();
                    setText(e.target.value);
                  }}
                  ref={inputRef}
                  className="focus:outline-2 outline-blue-700 bg-transparent rounded-sm px-4 py-2 foucus:ring-0 ring-1 ring-blue-700"
                />
                <button
                  className="px-4 close py-2 bg-blue-700 text-white rounded"
                  onClick={() => setDialogOpen(false)}
                >
                  Search
                </button>
              </form>
            </div>
          </dialog>
        </div>
      </div>
      <nav
        id="mobilenav"
        className={`absolute pt-16 gap-4 text-xl backdrop-blur-lg p-4 flex flex-col bg-blue-700 sm:hidden items-center justify-start transition-all duration-500 ease-in-out ${
          open ? "-top-0" : "-top-full"
        } left-0 w-full h-fit`}
      >
        {children}
      </nav>
    </header>
  );
};

export default NavBar;
