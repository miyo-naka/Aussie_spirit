import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";
import { Headline } from "@/components/Headline/page";
import { getBlogsByCategory } from "@/utils/getAllBlogs";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

// 許可するカテゴリ
const categoryData: Record<string, string> = {
  AussieLife: "日々の暮らしの中でのちょっとした発見や不思議なこと",
  English: "英語学習でつまづいたこと、気になるオージー英語",
  Parenting: "子どもたちの成長を見守る中での発見などなど",
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

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
            <div key={post.slug} className="border flex sm:block">
              <img
                src={`/img/${post.frontmatter.imgUrl}`}
                className="w-1/2 sm:w-full max-h-50 rounded-xl"
              />
              <div className="p-4">
                <h2 className="text-sm sm:text-lg font-bold ">
                  {post.frontmatter.title}
                </h2>
                <p className="text-sm mb-2">{post.frontmatter.date}</p>
                <Link
                  href={`/${category}/${post.slug}`}
                  className="text-sm text-gray-500 hover:text-blue-500"
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
