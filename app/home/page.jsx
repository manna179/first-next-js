

import Link from "next/link";


export default async function HomePage() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
    <ul>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
    {posts.map((post) => (
        <li key={post.id} className="mb-4 border">
         <Link href={`/post/${post.id}`} className="text-blue-500 hover:underline">
              {post.title}
            </Link>
        </li>
      ))}
    </div>
    </ul>
  </div>
  );
}