import { useParams } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { blogPosts } from '@/blogData';

const BlogArticleLayout = () => {
  const { slug } = useParams();

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) return <h2>404 - Post Not Found</h2>;

  const PostComponent = lazy(post.component);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostComponent />
    </Suspense>
  );
};

export default BlogArticleLayout;
