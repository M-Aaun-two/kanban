import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CustomKanban } from "./kanban"; // Import the Kanban component

const IconSideNav = () => {
  return (
    <div className="bg-slate-900 text-slate-100 flex h-screen w-full">
      <SideNav />
      <div className="w-full flex-1 overflow-auto">
        <CustomKanban /> {/* Display the Kanban board */}
      </div>
    </div>
  );
};

const SideNav = () => {
  const [selected, setSelected] = useState(0);

  return (
    <nav className="h-screen w-fit bg-black p-4 flex flex-col items-center gap-2">
        <div className="flex flex-col gap-5 justify-center">
            <svg
            width="40"
            height="28"
            viewBox="0 0 40 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-4"
            >
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.98578 4.11462L0 14C1.99734 15.9773 4.27899 17.6437 6.76664 18.9474C7.45424 20.753 8.53203 22.4463 10 23.8995C15.5229 29.3668 24.4772 29.3668 30 23.8995C31.468 22.4463 32.5458 20.753 33.2334 18.9473C35.721 17.6437 38.0027 15.9773 40 14L30.0223 4.12266C30.0149 4.11527 30.0075 4.10788 30 4.1005C24.4772 -1.36683 15.5229 -1.36683 10 4.1005C9.99527 4.10521 9.99052 4.10991 9.98578 4.11462ZM29.0445 20.7309C26.1345 21.7031 23.0797 22.201 20 22.201C16.9203 22.201 13.8656 21.7031 10.9556 20.7309C11.2709 21.145 11.619 21.5424 12 21.9196C16.4183 26.2935 23.5817 26.2935 28 21.9196C28.381 21.5424 28.7292 21.145 29.0445 20.7309ZM12.2051 5.8824C12.9554 6.37311 13.7532 6.79302 14.588 7.13536C16.3038 7.83892 18.1428 8.20104 20 8.20104C21.8572 8.20104 23.6962 7.83892 25.412 7.13536C26.2468 6.79302 27.0446 6.3731 27.795 5.88238C23.4318 1.77253 16.5682 1.77254 12.2051 5.8824Z"
                fill="#FFFFFF"
                ></path>
            </svg>
            <div className="flex flex-col gap-0 justify-center ml-3" style={{ letterSpacing: '-2px' }}>
                <h1>M</h1>
                <h1>A</h1>
                <h1>D</h1>
                <h1>E</h1>
                {/* Add space manually or via CSS */}
                <h1 style={{ marginTop: '10px' }}></h1> 
                <h1>B</h1>
                <h1>Y</h1>
                {/* Another space */}
                <h1 style={{ marginTop: '10px' }}></h1>
                <h1>A</h1>
                <h1>A</h1>
                <h1>U</h1>
                <h1>N</h1>
            </div>


        </div>
      

      
    </nav>
  );
};

const NavItem = ({ children, selected, id, setSelected }) => {
  return (
    <motion.button
      className="p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors relative"
      onClick={() => setSelected(id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="block relative z-10">{children}</span>
      <AnimatePresence>
        {selected && (
          <motion.span
            className="absolute inset-0 rounded-md bg-indigo-600 z-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          ></motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default IconSideNav;
