import { auth } from "@/lib/auth"
import Link from "next/link"
import Logout from "./register/logout";

export default async function Navbar() {
    const data = await auth();
    return (
        <div className="h-[60px] w-screen bg-black px-30 flex items-center justify-between">
            <p className="font-bold font-mono text-4xl text-white">Brandon&apos;s Blog</p>
            <div className="flex gap-5 text-white text-sm">
                <Link href={"/"}>HOME</Link>
                <Link href={"/blogpost"}>BLOG POSTS</Link>
                <Link href={"/categories"}>CATEGORIES</Link>
                <Link href={"/about"}>ABOUT</Link>
                { data ? (
                    <div>
                        <p>{data.user.name}</p>
                        <Logout/>
                        </div>
                ) :  (
                <div ><Link href={"/login"}>LOGIN</Link>
                <Link href={"/register"}> REGISTER</Link>
                </div>
                )}
            </div>
        </div>
    )
}