import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Footer = () => {
  const [footerVisible, setFooterVisible] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      if (scrollTop + windowHeight >= scrollHeight - 30) {
        setFooterVisible(true);
        toast.success("You've reached the end!");
      } else if (scrollTop > lastScrollTop) {
        setFooterVisible(true);
      } else {
        setFooterVisible(false);
        toast.error("Scrolling up – Footer hidden");
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-in-out fixed bottom-0 left-0 w-full md:ml-[250px] md:w-[calc(100%-250px)] z-50 bg-black text-white flex flex-col items-start justify-center px-4 py-6 space-y-2 
        ${footerVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
    >
      <h2 className="text-xl font-bold font-[Sixtyfour]">OpportunityHub</h2>
      <p className="text-sm max-w-xl">
        Great platform for job seekers passionate about startups. Find your dream job easier.
      </p>
      <p className="text-xs mt-2">© 2025 OpportunityHub. All rights reserved.</p>
    </div>
  );
};

export default Footer;
