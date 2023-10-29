import { useState } from "react";
import { nav, images } from "../constants";

const Header = () => {
  const [menu, setMenu] = useState(true);
  return (
    <section className="container absolute inset-x-0 px-5 mx-auto  flex justify-between items-center xl:h-28 h-16 z-10">
      {/* nav link */}
      <nav className="flex-1 text-white">
        <ul className="hidden xl:flex flex-row gap-x-8 p1">
          {nav.menu.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer leading-10 hover:line-1 hover:mb-[-2px]"
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className="relative xl:hidden ">
          <i className={`${menu ? 'ic-menu' : 'ic-close'}`}
            onClick={() => setMenu(!menu)} />
          <ul className={`${menu ? "hidden " : "block"} absolute top-10 gap-x-8 p1 bg-black/80 backdrop-blur rounded-xl p-10`}>
            {nav.menu.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer leading-10 hover:line-1 hover:mb-[-2px]"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* logo */}
      <div className="text-center flex flex-1 justify-center">
        <img src={images.logo.src} alt={images.logo.alt} />
      </div>

      {/* search & cart */}
      <div className="text-right flex-1 flex justify-end items-center xl:gap-8 gap-0">
        <div className="relative flex justify-end">
          <input
            type="text"
            className="xl:block hidden bg-black/70 backdrop-blur rounded-md placeholder:text-white/50 w-64 p2 py-3 pl-5 pr-10"
            placeholder="Search games & products ..."
          />
          <button className="cursor-pointer xl:absolute relative inset-y-0 right-5 m-auto">
            <i className="ic-search text-white " />
          </button>
        </div>
        <button className="">
     <i className="ic-shop text-white" />
        </button>
      </div>
    </section>
  );
};

export default Header;
