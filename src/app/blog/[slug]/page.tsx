import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getAllBlogs } from "@/utils/getAllBlogs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = {
  slug: string;
};

// 静的パス生成
export async function generateStaticParams(): Promise<Params[]> {
  const posts = await getAllBlogs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPage(props: { params: Promise<Params> }) {
  const { slug } = await props.params;
  const posts = await getAllBlogs();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow max-w-[90vw] md:max-w-[60vw] mx-auto">
        {/* <Headline category={category} comment={categoryData[category]} /> */}
        <div className="p-2 mt-4">
          <div className="my-4 md:mb-10 ">
            <img
              src={`/blog/${post.frontmatter.imgUrl}`}
              className="max-h-60 mx-auto rounded-lg"
            />
            <h2 className="text-2xl pt-4 text-center font-bold">
              {post.frontmatter.title}
            </h2>
            <p className="text-l text-right">{post.frontmatter.date}</p>
          </div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="prose lg:prose-lg max-w-none prose-blue"
            components={{
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
          <Link
            href="/blog"
            className="inline-block text-blue-500 my-8 hover:text-blue-700"
          >
            記事一覧に戻る
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
