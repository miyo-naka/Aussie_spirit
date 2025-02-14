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
      category: Array.isArray(data.category) ? data.category : [data.category], // 配列に変換
      tags: data.tags || [],
      content,
    };
  });
  return posts;
}

export async function getBlogsByCategory(category: string) {
  const posts = await getAllBlogs();
  return posts.filter((post) => post.category.includes(category)); // 配列内にカテゴリがあるかチェック
}
