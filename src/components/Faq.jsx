import { useState } from "react";
import { faqList } from "../constants";
const Faq = () => {
  const [accordionFaq, setAccordionFaq] = useState(faqList);
  const handleAccorionFaq = (faqId) => {
    const updateFaq = accordionFaq.map((itemFaq) => {
      if (faqId === itemFaq.id) {
        return { ...itemFaq, isOpen: !itemFaq.isOpen };
      } else {
        return { ...itemFaq, isOpen: false };
      }
    });
    setAccordionFaq(updateFaq);

    console.log(accordionFaq);
  };
  return (
    <section className="mx-auto px-6 pb-6 xl:pb-20 relative before:shadow-pink before:-right-[40vw] before:-bottom-10 before:absolute overflow-hidden">
      <h2 className="mb-10 text-white text-center">F.A.Q.</h2>
      {accordionFaq.map((faq) => {
        return (
          <div
            className={`mx-auto w-full xl:w-1/2 py-6 px-8 hover:bg-white/10 rounded-lg mb-5 cursor-pointer transition-all ease-in ${
              faq.isOpen ? "bg-white/10" : "bg-white/5"
            }`}
            key={faq.id}
            onClick={() => {
              handleAccorionFaq(faq.id);
            }}
          >
            <div className="flex justify-between items-center gap-5">
              <p className="font-satoshi text-lg text-white font-bold">
                {faq.question}
              </p>
              <i
                className={`ic-arrow text-lg rounded-full cursor-pointer transition-all ease-in ${
                  faq.isOpen
                    ? "-rotate-90 text-pink hover:text-white"
                    : "rotate-90 text-white hover:text-pink"
                }`}
              />
            </div>
            <p
              className={`p1 text-white mt-8 ${
                faq.isOpen ? "block" : "hidden"
              } `}
            >
              {faq.explain}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Faq;
