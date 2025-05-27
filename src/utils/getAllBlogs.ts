import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Post = {
  frontmatter: {
    title: string;
    date: string;
    category: string[];
    tags?: string[];
    imgUrl?: string;
    excerpt?: string;
  };
  slug: string;
  content: string;
};

async function getAllBlogs() {
  const postsDirectory = path.join(process.cwd(), "/src/posts");
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileData = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileData);
    return {
      frontmatter: {
        ...data,
        category: Array.isArray(data.category)
          ? data.category
          : [data.category], // 配列に変換
        title: data.title,
        date: data.date,
        tags: data.tags || [],
        imgUrl: data.imgUrl,
        excerpt: data.excerpt,
      },
      slug: filename.replace(".md", ""),
      content,
    };
  });
  return posts;
}

export async function getBlogsByCategory(category: string) {
  const posts = await getAllBlogs();
  return posts.filter((post) => post.frontmatter.category.includes(category)); // 配列内にカテゴリがあるかチェック
}
