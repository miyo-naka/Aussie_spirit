import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";
import getAllBlogs from "@/utils/getAllBlogs";
import ReactMarkdown from "react-markdown";

export default async function AussieLife() {
  const posts = await getAllBlogs();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <p>Aussie Life</p>
        {posts.map((post, index) => (
          <div key={index}>
            <h2>{post.frontmatter.title}</h2>
            <p>{post.frontmatter.date}</p>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
