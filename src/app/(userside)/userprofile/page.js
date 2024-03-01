"use client"

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

const UserProfilePage = () => {

    const userData = useSession();
    console.log(useSession());

    if(userData.status === 'loading'){
        return <p className="text-center">Loading.......</p>
    }
    if(userData.status === 'unauthenticated'){
        redirect("/login")
    }

    return (
        <div className="mt-10">
            <div className="w-full max-w-7xl mx-auto h-64 bg-[#d3d3d3] relative">
                <div className="p-[2px] rounded-full bg-black w-fit absolute left-1/2 -translate-x-1/2 -bottom-12">
                    <Image
                        src={userData.data.user.image}
                        height={0}
                        width={0}
                        className="h-32 w-32 rounded-full"
                        sizes="200vw"
                        alt="User Image"
                    />
                </div>
            </div>
            <div className="w-full bg-[#f7f7f7] shadow p-20">
            </div>
        </div>
    );
};

export default UserProfilePage;