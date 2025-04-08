import { getAllBlogSlugs, getBlogPostBySlug } from '../../lib/strapi';

export async function getStaticPaths() {
  const slugs = await getAllBlogSlugs(); // ['post-1', 'post-2', ...]
  
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false, // Puedes cambiar a true o 'blocking' si lo necesitas
  };
}

export async function getStaticProps({ params }) {
  const post = await getBlogPostBySlug(params.slug);
  return { props: { post } };
}

export default function PostPage({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
