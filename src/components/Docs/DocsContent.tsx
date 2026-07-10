'use client';
import { useRef } from 'react';

// Docs feature not used in portfolio
const DocsContent = ({ content }: any) => {
  const rootRef = useRef(null);

  return (
    <div ref={rootRef}>
      <div
        className='blog-details'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default DocsContent;
