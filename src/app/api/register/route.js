import bcryptjs from "bcryptjs";
import { connectDB } from "@/utils/config/db";
import { NextResponse } from "next/server";
import User from "@/utils/models/user";

export const POST = async (request) => {
    await connectDB();
    const { fullname, email, password } = await request.json();
    // console.log(fullname, email, password);
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return NextResponse.json({ error: "user already exist" }, { status: 400 })
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        await User.create({ fullname, email, password: hashedPassword });
        return NextResponse.json({ message: "registered successfully" }, { status: 201 })
    } catch (error) {
        NextResponse.json({ error: error.message }, { status: 500 });
    }
}