import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";
import { getBlogsByCategory } from "@/utils/getAllBlogs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { Headline } from "@/components/Headline/page";
import { notFound } from "next/navigation";
import { categoryData } from "@/const/categoryData";

type CategoryPageProps = {
  params: Promise<{ category: string; slug: string }>;
};

// すべてのカテゴリの記事のスラグを取得
export async function generateStaticParams() {
  const categories = Object.keys(categoryData);
  let paths: { category: string; slug: string }[] = [];

  for (const category of categories) {
    const posts = await getBlogsByCategory(category);
    const categoryPaths = posts.map((post) => ({
      category,
      slug: post.slug,
    }));
    paths = [...paths, ...categoryPaths];
  }

  return paths;
}

export default async function CategoryPagePost({ params }: CategoryPageProps) {
  const { category, slug } = await params;
  if (!categoryData[category]) {
    return notFound();
  }

  const posts = await getBlogsByCategory(category);
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return <p>記事が見つかりませんでした。</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow max-w-[90vw] md:max-w-[60vw] mx-auto">
        {/* <Headline category={category} comment={categoryData[category]} /> */}
        <div className="p-2 mt-4">
          <img
            src={`/blog/${post.frontmatter.imgUrl}`}
            className="max-h-60 mx-auto rounded-sm rounded-lg"
          />
          <h2 className="text-2xl mt-4">{post.frontmatter.title}</h2>
          <p className="text-l mb-4">{post.frontmatter.date}</p>

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="prose lg:prose-lg max-w-none prose-blue"
          >
            {post.content}
          </ReactMarkdown>
          <Link
            href={`/${category}`}
            className="inline-block text-blue-500 mt-8 hover:text-blue-700"
          >
            一覧に戻る
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
