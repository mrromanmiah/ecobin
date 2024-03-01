import { BsHeadset } from "react-icons/bs";
import { BsClockFill } from "react-icons/bs";
import { BsClipboardXFill } from "react-icons/bs";
import { BsCreditCard2BackFill } from "react-icons/bs";

const BannerOptions = () => {
    const options = [
        {
            logo: BsHeadset,
            textInfo: "Customer Service"
        },
        {
            logo: BsClockFill,
            textInfo: "Pickup Schedule"
        },
        {
            logo: BsClipboardXFill,
            textInfo: "Holiday Calender"
        },
        {
            logo: BsCreditCard2BackFill,
            textInfo: "Pay My Bill"
        },
    ]
    return (
        <div className="flex items-center gap-4">
            {
                options.map((option, index) => {
                    const Icon = option.logo;
                    return <div key={index} className="w-full bg-[#f7f7f7] rounded-2xl border-2 border-[#d3d3d3] text-xl font-bold space-y-2 text-[#00416d] hover:border-[#00416d] hover:bg-[#dae7f5] flex-1 h-32 p-1">
                       <div className="text-2xl flex justify-center mt-4"><Icon/></div>
                       <p className="text-center">{option.textInfo}</p>
                    </div>
                })
            }
        </div>
    );
};

export default BannerOptions;