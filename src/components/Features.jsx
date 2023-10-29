import { fearutesDevice } from "../constants";
import { images } from "../constants";
const Features = () => {
    return (
        <div className="container mx-auto flex flex-col items-center gap-10 xl:flex-row px-6">
            <div className="flex-1">
                <h2 className="text-white capitalize leading-none my-9 xl:my-12">
                    our virtual headsets shine with unique features!
                </h2>
                <div className="grid xl:grid-rows-3 xl:grid-flow-col xl:gap-4">
                    {fearutesDevice.map((item) => (
                        <div className="flex items-start gap-4 mb-4" key={item.id}>
                            <i className="ic-star text-blue text-xl" />
                            <p className="text-white p1">{item.feature}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-1 flex justify-center xl:order-first">
                <img src={images.vr.src} alt="vr headset" className="p-5" />
                <div className="shadow-pink"></div>
            </div>
        </div>
    )
}

export default Features;