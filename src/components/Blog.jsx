import { images } from "../constants";
import { ButtonSecondary, ButtonTertiary } from "./Button";
const Blog = () => {
  return (
    <section className="container mx-auto flex flex-col xl:flex-row gap-8 px-6 py-20">
      <div className="flex-1">
        <h2 className="text-white capitalize leading-none max-w-full xl:max-w-md my-9 xl:my-12">
          jane wilson, gaming creator
        </h2>
        <div className="text-white p1">
          A virtual headset creator as in an individual or company that
          spesializes in designing and manufacturing virtual rality headsets,
          also kwown as VR headsets.
        </div>
        <ButtonTertiary
          styles={"px-6 py-4 my-10 hover:gap-5 transition-all ease-in duration-150"}
        >
          <span>Read my blog</span>
          <i className="ic-arrow " />
        </ButtonTertiary>
        <div className="flex gap-3 my-8 items-center">
          <img src={images.views.src} alt={images.views.alt} />
          <p className="font-satoshi font-bold text-white  text-lg xl:text-3xl">
            +258 Views
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center relative">
        <div className="img-card-blog bg-pink ">
          <img
            src={images.jane.src}
            alt={images.jane.alt}
            className="h-[25em] min-w-[100vw] sm:h-[30em] sm:min-w-[40em]"
          />
        </div>
        <img
          src={images.janeTwit.src}
          alt={images.janeTwit.alt}
          className="absolute -bottom-[8em] max-w-[100vw] xl:translate-x-0 xl:left-[-3em] xl:bottom-[-4em] "
        />
        <div className="content-[''] absolute bg-pink/20 h-96 w-96 rounded-full bottom-2 right-0 blur-2xl -z-10 " />
      </div>
    </section>
  );
};

export default Blog;
