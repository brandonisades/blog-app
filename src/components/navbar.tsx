import { auth } from "@/lib/auth"
import Link from "next/link"
import Logout from "./logout";
import Image from "next/image";

export default async function Navbar() {
    const data = await auth();
    
    return (
        <div className="h-[60px] w-full bg-black px-5 md:px-30 flex items-center justify-between">
             
               <Image src="/brndn.png" alt="Your Name" width={150} height={150} className="h-15 w-auto"/>
            <div className="flex gap-5 text-white text-sm w-full justify-end md:w-auto">
                <Link href={"/"}>HOME</Link>
                <Link href={"/blogpost"}>BLOG POSTS</Link>
                <Link href={"/about"}>ABOUT</Link>
                { data ? (
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
                        <p>{data.user.name}</p>
                        <Logout/>
                        </div>
                ) :  (
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5"
                 ><Link href={"/login"}>LOGIN</Link>
                <Link href={"/register"}> REGISTER</Link>
                </div>
                )}
            </div>
        </div>
    )
}