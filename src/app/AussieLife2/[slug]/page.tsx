import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";
import { getBlogsByCategory } from "@/utils/getAllBlogs";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Headline } from "@/components/Headline/page";

export async function generateStaticParams() {
  const posts = await getBlogsByCategory("AussieLife");
  return posts.map((post) => ({ slug: post.slug }));
}

type Params = Promise<{ slug: string }>;

export default async function AussieLifePost({ params }: { params: Params }) {
  const { slug } = await params;
  const posts = await getBlogsByCategory("AussieLife");
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p>記事が見つかりませんでした。</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow mx-10">
        <Headline category="AussieLife" comment="AussieLife Headline" />
        <div className="border p-4">
          <h2 className="text-2xl">{post.frontmatter.title}</h2>
          <p className="text-l mb-4">{post.frontmatter.date}</p>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        <Link href="/AussieLife" className="text-blue-500">
          戻る
        </Link>
      </div>
      <Footer />
    </div>
  );
}
