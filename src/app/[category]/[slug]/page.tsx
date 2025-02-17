import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";
import { getBlogsByCategory } from "@/utils/getAllBlogs";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Headline } from "@/components/Headline/page";
import { notFound } from "next/navigation";

type CategoryPageProps = {
  params: { category: string; slug: string };
};

// 許可するカテゴリ
const categoryData: Record<string, string> = {
  AussieLife: "AussieLife Headline",
  English: "English Headline",
  Parenting: "Parenting Headline",
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
  const { category, slug } = params;
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
      <div className="flex-grow mx-10">
        <Headline category={category} comment={categoryData[category]} />
        <div className="border p-4">
          <h2 className="text-2xl">{post.frontmatter.title}</h2>
          <p className="text-l mb-4">{post.frontmatter.date}</p>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        <Link href={`/${category}`} className="text-blue-500">
          戻る
        </Link>
      </div>
      <Footer />
    </div>
  );
}
