import { iBlog } from "@/types/blog"
import Link from "next/link";

export default async function blogPost() {
  const res = await fetch("https://ruggedinsurance-us.backendless.app/api/data/Blogs?loadRelations=author", {
    cache: "no-store"
    
  })
  const data: iBlog[] = await res.json();

  return (

    
    <div className="p-8">

      {/* Sidebar */}
      <aside className="w-1/4 bg-white shadow-md p-4 rounded-md h-fit">
        <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
        <ul className="space-y-2 text-sm">
          <li><Link href="#">IT</Link></li>
          <li><Link href="#">Sport</Link></li>
          <li><Link href="#">NEWS</Link></li>
        </ul>
      </aside>
      <h1 className="text-2xl font-bold mb-6">Blog Posts</h1>
      <div className="space-y-6">
        {data.map((blog) => (
          <div
            key={blog.objectId}
            className="bg-white shadow-md p-6 rounded-md hover:shadow-lg transition"
          >
            <Link href={`/blogpost/${blog.objectId}`}>
  <h2 className="text-xl font-semibold text-blue-600 hover:underline">
    {blog.title}
  </h2>
</Link>
            <p className="text-gray-700 mt-2"></p>
            {blog.author && (
              <p className="text-sm text-gray-500 mt-1">
                By: {blog.author.name}
              </p>
            )}
          </div>
        ))}
      </div>
    </div> 
  );
  

}
