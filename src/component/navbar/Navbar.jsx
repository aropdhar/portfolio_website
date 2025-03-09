import React, { useState, useEffect } from "react";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-blue-700 text-white shadow-md" : "bg-transparent"
      }`}
    >
    
    <div className="bg-gray-300/50 shadow-lg py-4">
     <div className="container">
        <div className="flex items-center justify-between">
            <div>
               <h1>Arop Dhar</h1>
            </div>
            <div className="flex items-center gap-x-[18px]">               
                 <li className="MenuUnderline"><a href="#">Home</a></li>
                 <li className="MenuUnderline"><a href="#">About</a></li>
                 <li className="MenuUnderline"><a href="#">Portfolio</a></li>
                 <li className="MenuUnderline"><a href="#">Contact</a></li>               
            </div>
        </div>
     </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar

