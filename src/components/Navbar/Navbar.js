import Image from "next/image";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import { BsJustifyLeft } from "react-icons/bs";


const Navbar = () => {
  
    return (
        // new changes
        // add
        <div className="h-24 flex items-center w-full bg-[#f7f7f7] shadow dark:bg-black dark:border dark:border-y-[#006f51] dark:border-x-0">
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-8 lg:px-0">
                <div className="w-fit">
                    {/* logo */}
                    <Link href="/">
                        <Image
                            src="/EcoBin.png"
                            height={0}
                            width={0}
                            className="w-48"
                            sizes="100vw"
                            alt="Logo"
                            priority
                            // style={{ height: "90%", width: "30%" }}
                        />
                    </Link>
                </div>
                <div>
                    <ul className="text-[#4e4e4e] hidden lg:flex items-center gap-8 dark:text-green-600">
                        <li><Link href="#" className="flex items-center gap-1 text-lg font-bold">Residential <FaCaretDown></FaCaretDown></Link></li>
                        <li><Link href="#" className="flex items-center gap-1 text-lg font-bold">Commercial <FaCaretDown></FaCaretDown></Link></li>
                        <li><Link href="#" className="flex items-center gap-1 text-lg font-bold">Company <FaCaretDown></FaCaretDown></Link></li>
                        <li><Link href="#" className="flex items-center gap-1 text-lg font-bold">Jobs</Link></li>
                        <li><button className="btn bg-green-600 text-white text-lg">Start Service</button></li>
                    </ul>
                    <div className="lg:hidden">
                        <button><BsJustifyLeft className="text-3xl"></BsJustifyLeft></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;