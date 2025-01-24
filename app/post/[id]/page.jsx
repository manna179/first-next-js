
import Link from "next/link";

export default async function PostDetails({ params }) {
  const { id } = await params; 

 
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await response.json();

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1>User Id: {post.userId}</h1>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-6">{post.body}</p>
      <Link  className="bg-blue-500 text-white px-4 py-2 rounded-lg" href="/home">
        Back to Home
      </Link>
    </div>
  );
}
