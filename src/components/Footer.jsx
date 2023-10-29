import { images, nav } from "../constants";
const Footer = () => {
  return (
    <footer className="w-full bg-white/5">
      <div className="container mx-auto px-6 pt-20 pb-10 flex flex-col xl:flex-row gap-5">
        <div className="w-full xl:w-1/5 pt-2 mb-10 xl:mb-0">
          <img src={images.logo.src} alt={images.logo.alt} />
          <div className="flex gap-8 pb-6 pt-14">
            <i className="ic-twitter text-white text-xl cursor-pointer hover:text-blue" />
            <i className="ic-instagram text-white text-xl cursor-pointer hover:text-blue" />
            <i className="ic-discord text-white text-xl cursor-pointer hover:text-blue" />
            <i className="ic-facebook text-white text-xl cursor-pointer hover:text-blue" />
          </div>
          <p className="p1 text-white">(+994) 199-28-786</p>
        </div>
        <div className="w-full xl:w-2/5 flex justify-start xl:justify-around gap-10 xl:gap-0 mb-10 xl:mb-0">
          <div className="">
            <p className="font-satoshi font-bold text-white text-lg mb-8">
              Menu
            </p>
            <div className="flex flex-col gap-4">
              {nav.menu.map((menu) => {
                return (
                  <p className="p1 text-white cursor-pointer hover:text-blue" key={menu.id}>
                    {menu.name}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="">
            <p className="font-satoshi font-bold text-white text-lg mb-8">
              Company
            </p>
            <div className="flex flex-col gap-4">
              {nav.company.map((menu) => {
                return (
                  <p className="p1 text-white cursor-pointer hover:text-blue" key={menu.id}>
                    {menu.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full xl:w-2/5 flex justify-end">
          <div className="max-w-md">
            <p className="font-satoshi font-bold text-white text-lg mb-8">
              Subscribe Our News Letter
            </p>
            <p className="p1 text-white mb-5">
              Sure, please provide your email address to subscribe to newsletter
            </p>
            <div className="relative">
              <input
                type="email"
                className="rounded-md placeholder:text-white/50 w-full p2 py-3 pl-5 pr-10 bg-transparent border text-white"
                placeholder="Enter your email ..."
              />
              <button className="absolute h-full bg-blue hover:contrast-80  p-btn px-5 right-0 rounded-r-md">
                subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto  px-6 py-8">
        <div className="line-1 w-full opacity-50" />
        <p className="p2 text-white text-center py-8">
          © 2023 VReality. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
