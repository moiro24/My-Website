import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation | Moises Rosas',
  description:
    'Technical documentation and resources for projects, code snippets, and development guides.',
};

export default function DocsPage() {
  return (
    <article>
      <h1>Welcome to Startup Documentation</h1>

      <p className='font-medium'>
        This document serves as a simple template to showcase a sample layout
        and format. It is solely created for demonstration purposes and is not
        intended for any official use.
      </p>
      <p className='font-medium'>
        Please visit:{' '}
        <a
          className='underline'
          target='_blank'
          href='https://nextjstemplates.com/docs'
        >
          nextjstemplates.com/docs
        </a>{' '}
        to check out the real docs, setup guide and even video instructions
      </p>
    </article>
  );
}
