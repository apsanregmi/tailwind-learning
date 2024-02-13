// pages/others/blogs/[blogId].js
import React from 'react';
import axios from 'axios';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import styles from './Blog.module.css';
import Layout from '@/src/layout/Layout';
import RelatedBlogs from '@/src/components/blogs/RelatedBlogs';

const BlogDetail = ({ blog, coverImageDetails }) => {
  const { title, introduction, author, publishedDate, tags, content } = blog.fields;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [BLOCKS.HR]: () => <hr />,
      [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        return <div>Embedded Entry: {node.data.target.fields.title}</div>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, description, file } = node.data.target.fields;

        return (
          <figure>
            <img
              className={styles.embeddedImage}
              src={file.url}
              alt={description || title}
            />
            {description && <figcaption>{description}</figcaption>}
          </figure>
        );
      },
      [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri}>{children}</a>,
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        return <span>Inline Embedded Entry: {node.data.target.fields.title}</span>;
      },
      [INLINES.EMBEDDED_ASSET]: (node) => {
        const { title, description, file } = node.data.target.fields;

        return (
          <span>
            <img
              className={styles.inlineEmbeddedImage}
              src={file.url}
              alt={description || title}
            />
            {description && <span>{description}</span>}
          </span>
        );
      },
    },
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.ITALIC]: text => <em>{text}</em>,
      [MARKS.UNDERLINE]: text => <u>{text}</u>,
      [MARKS.CODE]: text => <code>{text}</code>,
      [MARKS.STRIKE_THROUGH]: text => <s>{text}</s>,
      [MARKS.HIGHLIGHT]: text => <mark>{text}</mark>,
      [MARKS.SUPERSCRIPT]: text => <sup>{text}</sup>,
      [MARKS.SUBSCRIPT]: text => <sub>{text}</sub>,
    },
  };

  return (
    <Layout>
    
    <div className={styles.blogContainer}>
      {coverImageDetails && (
        <img
          className={styles.coverImage}
          src={coverImageDetails.fields.file.url}
          alt={coverImageDetails.fields.description}
        />
      )}
      <div className={styles.blogDetails}>
        <h2>{title}</h2>
        <p className={styles.introduction}>{introduction}</p>
        <p className={styles.author}>Author: {author}</p>
        <p className={styles.publishedDate}>
          Published Date: {new Date(publishedDate).toLocaleDateString()}
        </p>
        <p className={styles.tags}>Tags: {Array.isArray(tags) ? tags.join(', ') : tags}</p>
      </div>

      <div className={styles.content}>{documentToReactComponents(content, options)}</div>
    <h2>Blogs you may want to explore</h2>
    <RelatedBlogs/>


      
    </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const { blogId } = params;

  try {
    const response = await axios.get(
      `https://cdn.contentful.com/spaces/0chql3dwavmp/entries/${blogId}?access_token=Ran701N8ENKFL4oOxD2SpeF6s8NGN9fEQeRGGtWZ6DM`
    );

    const blog = response.data;

    // Fetch details of the coverImage using sys.id
    const coverImageId = blog.fields.coverImage.sys.id;
    const coverImageResponse = await axios.get(
      `https://cdn.contentful.com/spaces/0chql3dwavmp/assets/${coverImageId}?access_token=Ran701N8ENKFL4oOxD2SpeF6s8NGN9fEQeRGGtWZ6DM`
    );

    const coverImageDetails = coverImageResponse.data;

    return {
      props: {
        blog,
        coverImageDetails,
      },
    };
  } catch (error) {
    console.error('Error fetching data from Contentful:', error);
    return {
      notFound: true,
    };
  }
}

export default BlogDetail;
