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
        <div className="mx-10 mb-10 grid grid-cols-auto-fill-280 gap-6">
          {posts.map((post) => (
            <div key={post.slug} className="border ">
              <img
                src={`/img/${post.frontmatter.imgUrl}`}
                className="max-h-50"
              />
              <div className="p-4">
                <h2 className="text-l font-bold ">{post.frontmatter.title}</h2>
                <p className="text-sm mb-2">{post.frontmatter.date}</p>
                <Link
                  href={`/AussieLife/${post.slug}`}
                  className="text-sm text-blue-500"
                >
                  続きを読む
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
