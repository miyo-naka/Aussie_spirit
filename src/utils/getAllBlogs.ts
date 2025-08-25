import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/posts");

// 再帰的に .md ファイルを探す関数
function getAllMarkdownFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return getAllMarkdownFiles(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      return [fullPath];
    }
    return [];
  });
}

export async function getAllBlogs() {
  const filePaths = getAllMarkdownFiles(postsDirectory);

  const posts = filePaths.map((filePath) => {
    const fileData = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileData);

    const slug = path.basename(filePath, ".md");
    const category = path.relative(postsDirectory, path.dirname(filePath));
    return {
      frontmatter: {
        ...data,
        category: Array.isArray(data.category)
          ? data.category
          : data.category
          ? [data.category]
          : [],
        title: data.title,
        date: data.date,
        tags: data.tags || [],
        imgUrl: data.imgUrl,
        excerpt: data.excerpt,
      },
      slug,
      category,
      content,
    };
  });

  // 日付で降順ソート
  posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });

  return posts;
}
