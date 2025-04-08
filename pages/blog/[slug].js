// pages/blog/[slug].js
import { getBlogPostBySlug } from '../../lib/strapi';

export async function getStaticPaths() {
  // Lógica para generar paths...
}

export async function getStaticProps({ params }) {
  const post = await getBlogPostBySlug(params.slug);
  return { props: { post } };
}

export default function PostPage({ post }) {
  // Renderizar el post...
}
