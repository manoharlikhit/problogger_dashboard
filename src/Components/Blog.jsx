import React from 'react';
import { useParams } from 'react-router-dom';
import pages from '../api/pages.json'; // import the pages.json file

const Blog = () => {
  const { blogid } = useParams();
  
  // Find the page with the matching blogid
  const page = pages.find(page => page.pageid === Number(blogid));

  // If there's no matching page, return a "Page not found" message
  if (!page) {
    return <div>Page not found</div>;
  }

  return (
    <div>
      <h1>{page.pagename}</h1>
      <p>hi this is {blogid}</p>
    </div>
  );
}

export default Blog;