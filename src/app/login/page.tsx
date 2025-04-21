import {Metadata} from "next"
import FormLogin from "@/components/login/form";

export const metadata: Metadata = {
    title: "Login Page",
    description: "Login Page",
};

export default function Page(){
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="md:w-[30%] w-[90%]">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
            <FormLogin />
            </div>
        </div>
    )
}