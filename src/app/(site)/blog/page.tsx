import BlogGridContainer from '@/components/Blog/BlogGridContainer';
import Breadcrumb from '@/components/Breadcrumb';
import { blogPosts } from '@/data/blogData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Moises Rosas',
  description:
    'Articles and insights on React development, JavaScript, web development best practices, and lessons from building full-stack applications.',
};

export default async function BlogPage() {
  const posts = blogPosts;

  return (
    <>
      <Breadcrumb pageTitle='Blog Grid' />

      <section className='pt-20 pb-17.5 lg:pt-25 lg:pb-22.5 xl:pb-27.5'>
        <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
          <BlogGridContainer blogs={posts} />
        </div>
      </section>
    </>
  );
}
