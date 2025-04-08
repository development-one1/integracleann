import axios from 'axios';
import qs from 'qs';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

const api = axios.create({
  baseURL: `${API_URL}/api`,
});

export const getBlogPosts = async () => {
  const query = qs.stringify({
    populate: '*',
    sort: ['fecha_publicacion:desc'],
  });

  const { data } = await api.get(`/blog-posts?${query}`);
  return data.data;
};

export const getBlogPostBySlug = async (slug) => {
  const query = qs.stringify({
    populate: '*',
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });

  const { data } = await api.get(`/blog-posts?${query}`);
  return data.data[0];
};