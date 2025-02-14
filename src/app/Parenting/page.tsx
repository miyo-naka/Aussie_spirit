import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";
import { getBlogsByCategory } from "@/utils/getAllBlogs";
import Link from "next/link";

export default async function Parenting() {
  const posts = await getBlogsByCategory("Parenting");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <h1 className="text-2xl">Parenting</h1>
        {posts.map((post) => (
          <div key={post.slug}>
            <h2 className="text-xl">{post.frontmatter.title}</h2>
            <p>{post.frontmatter.date}</p>
            <Link href={`/Parenting/${post.slug}`} className="text-blue-500">
              続きを読む
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
