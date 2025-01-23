// // pages/index.js
// import Link from "next/link";

// export async function getStaticProps() {
//   // Fetching mock API data
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();

//   return {
//     props: {
//       posts, // Passing the posts to the component as props
//     },
//   };
// }

// export default function HomePage({ posts }) {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id} className="mb-4">
//             <Link href={`/post/${post.id}`}>
//               <a className="text-blue-500 hover:underline">{post.title}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
