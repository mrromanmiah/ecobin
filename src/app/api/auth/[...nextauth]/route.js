import { connectDB } from "@/utils/config/db";
import User from "@/utils/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";
import bcryptjs from "bcryptjs"

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                const { email, password } = credentials;
                try {
                    await connectDB();
                    const user = await User.findOne({ email })
                    if (!user) {
                        return null;
                    }
                    const passMatch = await bcryptjs.compare(password, user.password)
                    if (!passMatch) {
                        return null;
                    }
                    return user;
                } catch (error) {
                    console.log("Error ", error);
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async signIn({ user, account }) {
            // console.log("User ", user);
            // console.log("Account", account);
            if (account.provider === "google") {
                const { name, email } = user;
                try {
                    await connectDB();
                    const userExist = await User.findOne({ email });
                    if (!userExist) {
                        const res = await fetch("http://localhost:3000/api/user", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                fullname: name,
                                email
                            })
                        })
                        if (res.ok) {
                            console.log(res);
                            return user
                        }
                    }
                    else {
                        // return redirect("/")
                        // "/";
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            return user;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };