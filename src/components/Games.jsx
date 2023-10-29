import { ButtonTertiary } from "./Button";
import { gameList } from "../constants";
import { useRef } from "react";
const Games = () => {
  const gamesRef = useRef(null);
  const handleHoriozontalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const sliderTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(sliderTimer);
      }
    }, speed);
  };
  return (
    <section className="flex flex-col gap-5 xl:gap-10 px-6 py-20 h-[40em] xl:h-[55em]">
      <div className="container mx-auto flex flex-col xl:flex-row justify-between items-start xl:items-center gap-5">
        <h2 className="text-white capitalize">top games</h2>
        <p className="p1 text-white max-w-sm">
          If you buy 2 games, you will receive 1 video game for free, along a{" "}
          <span className="text-blue font-bold">50%</span> discount.
        </p>
        <div className="hidden xl:flex gap-3">
          <ButtonTertiary
            styles="p-4"
            onclick={() => {
              handleHoriozontalScroll(gamesRef.current, 20, 400, -30);
            }}
          >
            <i className="ic-arrow rotate-180" />
          </ButtonTertiary>
          <ButtonTertiary
            styles="p-4"
            onclick={() => {
              handleHoriozontalScroll(gamesRef.current, 20, 400, 30);
            }}
          >
            <i className="ic-arrow" />
          </ButtonTertiary>
        </div>
      </div>
      <div className="container mx-auto relative">
        <div
          className="flex gap-5 xl:gap-8 overflow-x-scroll absolute py-8 max-w-[100vw] -left-6 pl-6 pr-8 xl:-left-[10vw] xl:pl-[10vw] xl:pr-[15vw] xl:py-10 hide-scroll-bar"
          ref={gamesRef}
        >
          {gameList.map((game) => {
            return (
              <div key={game.id} className="group relative cursor-pointer">
                <div className="img-games h-[20em] w-64 xl:h-[30em] xl:w-96 group-hover:bg-pink transition-all ease-in">
                  <img
                    src={game.img}
                    alt={game.name}
                    className="h-full w-full "
                  />
                </div>
                <p className="font-satoshi text-lg font-bold mt-3 text-white group-hover:text-pink transition-all">
                  {game.name}
                </p>
                <div className="content-[''] absolute bg-pink/20 h-96 w-96 rounded-full bottom-5 inset-x-0 blur-2xl -z-10 hidden group-hover:block" />
              </div>
            );
          })}
          <div className="relative cursor-pointer">
            <div className="flex justify-center items-center img-games h-[20em] w-64 xl:h-[30em] xl:w-96 bg-blue/10 transition-all ease-in">
              <button className="group hover:bg-blue bg-blue/10 w-20 h-20 rounded-full flex items-center justify-center">
                <i className="ic-arrow text-blue group-hover:text-deep p-btn" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
