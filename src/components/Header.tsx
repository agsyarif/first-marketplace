import { LuSearch, LuUserCircle } from "react-icons/lu";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${header ? 'py-1 bg-white shadow-lg dark:bg-accent' : 'py-6'} sticky top-0 z-30 transition-all`}>
        <div className="container mx-auto sticky">
        <div className="flex justify-between items-center">
          <img src="./assets/logo.png" alt="logo" width={220} height={200} />
          <div className="flex items-center gap-x-8">
            <ul className="flex gap-x-11   font-poppins text-primary">
              <li className="hover:text-secondary"><a href="#">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#serviceArea">Products</a></li>
              <li><a href="#smartRFQ">Smart RFQ</a></li>
              <li><a href="#smartContact">Smart Contact</a></li>
            </ul>
            <Button className="bg-primary font-poppins font-normal text-white">
              <a href="#services">Get Started</a>
            </Button>
            <LuSearch />
            <LuUserCircle />
            <div className="xl:hidden">
              {/* <MobileNav /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;