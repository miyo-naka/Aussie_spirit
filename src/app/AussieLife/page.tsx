import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function getAllBlogs() {
  const postsDirectory = path.join(process.cwd(), "/src/posts");
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileData = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileData);
    return {
      frontmatter: data,
      slug: filename.replace(".md", ""),
      content,
    };
  });
  return posts;
}

export default async function AussieLife() {
  const posts = await getAllBlogs();
  console.log(posts);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <p>Aussie Life</p>
        {posts.map((post, index) => (
          <div key={index}>
            <h2>{post.frontmatter.title}</h2>
            <p>{post.frontmatter.date}</p>
            <p>{post.frontmatter.date}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
