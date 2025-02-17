import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";
import { Headline } from "@/components/Headline/page";
import { getBlogsByCategory } from "@/utils/getAllBlogs";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: { category: string };
}

// 許可するカテゴリ
const categoryData: Record<string, string> = {
  AussieLife: "AussieLife Headline",
  English: "English Headline",
  Parenting: "Parenting Headline",
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

  // 許可されていないカテゴリなら 404
  if (!categoryData[category]) {
    return notFound();
  }

  const posts = await getBlogsByCategory(category);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Headline category={category} comment={categoryData[category]} />
        <div className="mx-10 mb-10 grid grid-cols-auto-fill-280 gap-6">
          {posts.map((post) => (
            <div key={post.slug} className="border">
              <img
                src={`/img/${post.frontmatter.imgUrl}`}
                className="max-h-50"
              />
              <div className="p-4">
                <h2 className="text-l font-bold ">{post.frontmatter.title}</h2>
                <p className="text-sm mb-2">{post.frontmatter.date}</p>
                <Link
                  href={`/${category}/${post.slug}`}
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
