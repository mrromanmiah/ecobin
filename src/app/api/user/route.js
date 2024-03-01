import { connectDB } from "@/utils/config/db";
import User from "@/utils/models/user";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const { fullname, email } = await request.json();
    console.log(fullname, email);
    await connectDB();
    await User.create({fullname, email});
    return NextResponse.json({message: "user registered"}, {status: 201});
}