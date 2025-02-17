import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";
import { Headline } from "@/components/Headline/page";
import { getBlogsByCategory } from "@/utils/getAllBlogs";
import Link from "next/link";
import { notFound } from "next/navigation";

type CategoryPageProps = { params: { category: string } };
const categoryData: { [key: string]: string } = {
  AussieLife: "AussieLife ヘッドライン",
  English: "English ヘッドライン",
  Parenting: "Parenting ヘッドライン",
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const posts = await getBlogsByCategory(category);
  if (!posts) {
    return notFound(); // 存在しないカテゴリの場合、404
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Headline category={category} comment={categoryData[category]} />
        <div className="mx-10 flex justify-center flex-wrap gap-6">
          {posts.map((post) => (
            <div key={post.slug} className="border p-4 w-[30%]">
              <h2 className="text-xl">{post.frontmatter.title}</h2>
              <p>{post.frontmatter.date}</p>
              <Link
                href={`/${category}/${post.slug}`}
                className="text-blue-500"
              >
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
