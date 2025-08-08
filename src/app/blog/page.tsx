import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getAllBlogs } from "@/utils/getAllBlogs";
import Link from "next/link";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export default async function BlogPage({ params }: CategoryPageProps) {
  // const { category } = await params;
  // if (!categoryData[category]) {
  //   return notFound();
  // }

  const posts = await getAllBlogs();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow mt-8">
        {/* <Headline category={category} comment={categoryData[category]} /> */}
        <div className="mx-2 sm:mx-10 mb-10 grid grid-cols-auto-fill-280 gap-6">
          {posts.map((post) => (
            <div key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="w-full flex flex-row sm:flex-col"
              >
                <img
                  src={`/blog/${post.frontmatter.imgUrl}`}
                  className="w-1/2 sm:w-full h-48 object-cover rounded-xl"
                />
                <div className="w-1/2 sm:w-full p-4">
                  <h2 className="text-sm sm:text-lg font-bold ">
                    {post.frontmatter.title}
                  </h2>
                  <p className="text-sm mb-2">{post.frontmatter.date}</p>
                  <p className="text-sm text-gray-700 mb-2">
                    {post.frontmatter.excerpt}
                  </p>
                  <p className="text-sm text-gray-500 hover:text-blue-700 pt-2">
                    続きを読む
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
