import { iBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://ruggedinsurance-us.backendless.app/api/data/Blogs?loadRelations=author")
  const data: iBlog[] = await res.json()
  console.log(data)

  return (
   
    <div className="flex flex-col min-h-screen">
      {/* Banner */}
      <div className="relative w-full h-[300px] z-10 ">
        <Image
          src="/banner.jpg"
          alt="banner"
          fill
          priority
          className="object-cover"
        />
        <div className="flex items-center justify-center">
          <h1 className="relative mt-20 text-black text-6xl font-bold font-mono">Welcome to My Blog
            <br/>
            <p className="text-sm text-black flex justify-center">Personal Blog and all things Tech</p>
          </h1>
        </div>
      </div>

      {/* Konten Blog */}
      <main className="flex-1 mt-10 py-4 px-28 max-sm:px-5 grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
        {data.map((blog, idx) => (
          <div key={idx}>
            <div className="relative flex w-full max-w-[250px] h-[200px]">
              <Image
                src={blog.thumbnail || "/default.jpg"}
                alt={blog.title}
                fill
                priority
                className="object-fill hover:scale-110"
              />
            </div>
            <div className="p-4 w-full">
              <h2 className="text-md font-bold line-clamp-2 text-gray-900">
                {blog.title}
              </h2>
              <div className="flex gap-2 mt-4">
                <div className="w-10 h-10 relative">
                </div>
                <div className="text-black flex-1 ml-4 text-sm">
                  <p>{blog.author.name}</p>
                  <p>{blog.author.email}</p>
                </div>
              </div>
              <Link
                href={`/blog/${blog.objectId}`}
                className="w-24 inline-flex items-center px-3 py-2 text-sm text-white bg-black rounded-lg mt-4"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </main>
      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 mt-10">
        © 2025 Brandon. All rights reserved.
      </footer>
    </div>
  );
}
