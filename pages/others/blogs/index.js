// pages/blogs/index.js

import Blog from './blog';

const BlogsPage = ({ blogs }) => (
  <div>
    <h1>Blogs</h1>
    {blogs.map(blog => (
      <Blog key={blog.sys.id} title={blog.fields.title} content={blog.fields.content} />
    ))}
  </div>
);

export async function getStaticProps() {
  try {
    // Replace 'YOUR_ACCESS_TOKEN' with your actual access token
    const accessToken = 'Ran701N8ENKFL4oOxD2SpeF6s8NGN9fEQeRGGtWZ6DM';

    // Replace the URL with your API endpoint
    const apiUrl = 'https://cdn.contentful.com/spaces/0chql3dwavmp/entries?content_type=blogs&access_token=' + accessToken;

    const response = await fetch(apiUrl);
    const data = await response.json();

    // Access the 'items' array in the response
    const blogs = data.items || [];

    return {
      props: {
        blogs,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        blogs: [],
      },
    };
  }
}

export default BlogsPage;
