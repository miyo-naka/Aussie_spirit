import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";
import { Headline } from "@/components/Headline/page";
import { getBlogsByCategory } from "@/utils/getAllBlogs";
import Link from "next/link";

export default async function AussieLife() {
  const posts = await getBlogsByCategory("AussieLife");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Headline category="AussieLife" comment="AussieLife Headline" />
        <div className="mx-10 flex justify-center flex-wrap gap-6">
          {posts.map((post) => (
            <div key={post.slug} className="border p-4 w-[30%]">
              <h2 className="text-xl">{post.frontmatter.title}</h2>
              <p>{post.frontmatter.date}</p>
              <Link href={`/AussieLife/${post.slug}`} className="text-blue-500">
                続きを読む
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
