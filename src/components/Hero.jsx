import { images, followUs, enhanced } from "../constants";
import { ButtonPrimary, ButtonSecondary } from "./Button";
const Hero = () => {
  return (
    <div className={`flex justify-center items-center sec-hero before:shadow-pink before:top-[-8em] before:left-[-30em] after:shadow-pink after:right-[-30em] after:bottom-40 pt-20 xl:pt-0`} style={{background:`url('${images.bgHero.src}')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      {/* hero left */}
      <div className="container flex flex-col px-6 xl:flex-row">
        <div className="flex-1 flex flex-col justify-center gap-10 min-h-screenxl:min-h-fit">
          <p className="uppercase p-btn text-white line-1 w-fit leading-10">
            virtual headset
          </p>
          <h1 className="text-white leading-none xl:max-w-xl max-w-full ">
            Experience a new dimension of reality
          </h1>
          <div className="flex gap-4 items-start">
            <i className="ic-star text-pink text-2xl" />
            <p className="p1 text-white xl:max-w-md max-w-full">
              Step into the future with out virtual headset, come to life right
              before your eyes
            </p>
          </div>
          <div className="flex flex-col gap-5 px-10 xl:flex-row xl:gap-8 xl:px-0">
            <ButtonPrimary styles="px-6 py-4 hover:gap-5 transition-all ease-in">
              <span className="leading-none">visit store</span>
              <i className="ic-arrow text-xl" />
            </ButtonPrimary>
            <ButtonSecondary styles="px-6 py-4 group hover:gap-5 transition-all ease-in">
              <i className="ic-explore text-2xl group-hover:rotate-90 transition-all ease-in" />
              <span>explore</span>
            </ButtonSecondary>
          </div>
          <div>
            <p className="p-btn text-white my-8 xl:my-5">FOLLOW US</p>
            <div className="flex gap-3">
              {followUs.map((item) => (
                <ButtonSecondary
                  styles="px-4 py-3 hover:bg-white hover:text-black transition-all ease-in"
                  key={item.id}
                >
                  <a href={item.link}>
                    <i className={`${item.icon} text-2xl`}></i>
                  </a>
                </ButtonSecondary>
              ))}
            </div>
          </div>
        </div>

        {/* hero right */}
        <div className="flex-1 flex flex-col items-center gap-8">
          <div className="relative">
            <img
              src={images.hero.src}
              alt="virtual headset"
              className="px-10 pt-10"
            />

            <div className="absolute top-8 left-[-2em] hidden xl:block">
              <div className="relative">
                <img src={images.pattern1.src} alt="pattern" />
                <p className="absolute p1 text-blue top-[2em] right-8">
                  Hello, John
                </p>
                <p className="absolute p1 text-white bottom-16 left-[-9em]">
                  Discover new world
                </p>
                <p className="absolute p1 text-white bottom-0 left-[-1em]">
                  Ultra reality
                </p>
              </div>
            </div>

            <div className="absolute top-[25%] right-[-2em] hidden xl:block">
                <img src={images.pattern2.src} alt="pattern" />
                <p className="absolute p1 text-blue top-[2em] right-8">
                  +100 Games
                </p>
            </div>

            <div className="line-2 after:content-[''] after:absolute after:bottom-0 after:h-1 after:w-96  after:right-[-3em] xl:after:w-[70em] xl:after:right-[-20em] " />
          </div>
          <div className="flex flex-col justify-normal w-full p-5 xl:flex-row xl:justify-center gap-5">
            {enhanced.map((item) => (
              <div className="flex gap-3" key={item.id}>
                <i className={`${item.icon} text-white text-3xl`} />
                <p className="p-1 text-white capitalize">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
