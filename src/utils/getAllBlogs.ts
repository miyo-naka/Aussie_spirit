import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getAllBlogs() {
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
          : [data.category],
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

  // Sort posts by date in descending order (newest first)
  posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });

  return posts;
}

// export async function getBlogsByCategory(category: string) {
//   const posts = await getAllBlogs();
//   return posts.filter((post) => post.frontmatter.category.includes(category));
// }
