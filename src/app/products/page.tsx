import {Metadata} from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Products",
    description: "Products",
};
export default function Page(){
    const products = ["Topi" , "Sepatu" , "Baju"]
        
    return (
        <div className="px-20">
        {products.map((item, idx) => {
            return (
                <div key={idx}>
                    <Link href={`/products/${item}`}>{item}</Link>
                </div>
            );
        })}
        </div>
    );
}