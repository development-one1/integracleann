// pages/blog/index.js
import Link from 'next/link';
import { getAllBlogSlugs } from '../../data/posts';

export default function BlogIndex() {
  const slugs = getAllBlogSlugs();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {slugs.map((slug) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
