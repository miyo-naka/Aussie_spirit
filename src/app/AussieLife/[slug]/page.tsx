import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";
import getAllBlogs from "@/utils/getAllBlogs";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await getAllBlogs();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function AussieLifePost({
  params,
}: {
  params: { slug: string };
}) {
  const posts = await getAllBlogs();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return <p>記事が見つかりませんでした。</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <div>
          <h2 className="text-2xl">{post.frontmatter.title}</h2>
          <p className="text-l">{post.frontmatter.date}</p>
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
