import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import BannerOptions from "./BannerOptions";

const Banner = () => {

    return (
        <div className="w-full mx-auto flex justify-between items-center">
            <div className="flex-1 space-y-4">
                <p>Waste Connections</p>
                <h1 className="text-5xl font-bold text-[#00416d]" style={{lineHeight: "1.2"}}>
                    Waste Connections<br></br>
                    Garbage Pickup
                </h1>
                <p className="text-xl dark:text-[#00416d]">Home and business waste management services and dumpster rentals.</p>
                <div className="flex items-center gap-4 pt-5">
                    <button className="btn bg-green-600 text-white text-lg font-bold">Start Service</button>
                    <button className="btn btn-outline border-[#00416d] text-[#00416d] text-lg font-bold">Request Query</button>
                </div>
                <div className="flex items-center gap-2 text-[#00416d] font-bold"><FaPhoneAlt></FaPhoneAlt> <span className="mb-1 ">+8801920382131</span></div>
                <div className="pt-10">
                    <BannerOptions></BannerOptions>
                </div>
            </div>
            <div className="flex-1">
                <Image
                    src="/BannerImages/BannerImage.png"
                    height={600}
                    width={600}
                    alt="Banner Image"
                    className="py-12"
                />
            </div>
        </div>
    );
};

export default Banner;