"use client"

import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {

    const [error, setError] = useState(null);
    const router = useRouter();

    const handleUserLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        try {
            const res = await signIn("credentials", {
                email, password, redirect: false
            })
            if (res.error) {
                setError("Invalid Credentials");
                return;
            }
            router.replace("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="max-w-4xl mx-auto flex justify-center mt-6 h-[700px] shadow">
            <div className="hidden lg:block flex-1 bg-[#2a55e5] relative">
                <div className="px-10 pt-8">
                    <h2 className="text-white text-3xl font-bold">Login</h2>
                    <p className="text-white font-bold mt-10">Get access to our site and services</p>
                </div>
                <div className="w-2/3 mx-auto absolute bottom-0 translate-x-1/4">
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/14454cb4-4d0a-4265-93fc-125f07fd08b1/7s3WH2L8pd.json"
                        style={{ height: '300px', width: '300px' }}
                    />
                </div>
            </div>
            <div className="flex-1 bg-[#f7f7f7] relative">
                <form onSubmit={handleUserLogin} className="w-5/6 mx-auto space-y-4 mt-8">
                    <input name='email' type="email" placeholder="Email address" className="input input-bordered w-full focus:outline-none rounded" required />
                    <input name='password' type="password" placeholder="Password" className="input input-bordered w-full focus:outline-none rounded" required />
                    <input className="btn h-14 bg-green-600 text-white w-full text-lg rounded" type="submit" value="Login" />
                </form>
                <div className="flex justify-center mt-4">
                    <button onClick={() => signIn("google")} className="w-5/6 btn border-2 border-[#00416d] rounded"><FcGoogle className="text-2xl"></FcGoogle>GOOGLE</button>
                </div>
                {
                    error && <p className='w-5/6 mx-auto mt-5 text-red-600 font-bold text-center'>Error: {error}</p>
                }
                <h3 className="text-center mt-10 absolute bottom-10 left-1/2 -translate-x-1/2">New here?  <Link href={"/register"}><span className="font-bold text-[#2a55e5]">Register</span></Link></h3>
            </div>
        </div>
    );
};

export default Login;