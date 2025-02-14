import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";
import { getBlogsByCategory } from "@/utils/getAllBlogs";
import Link from "next/link";

export default async function English() {
  const posts = await getBlogsByCategory("English");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <h1 className="text-2xl">English</h1>
        {posts.map((post) => (
          <div key={post.slug}>
            <h2 className="text-xl">{post.frontmatter.title}</h2>
            <p>{post.frontmatter.date}</p>
            <Link href={`/English/${post.slug}`} className="text-blue-500">
              続きを読む
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
