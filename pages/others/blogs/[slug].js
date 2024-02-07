// Blog.js
import { useEffect, useState } from "react";
import Layout from "@/layout";
import { useRouter } from "next/router";
import styles from "./Blog.module.css";

const Blog = () => {
  const [blogData, setBlogData] = useState(null);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      fetch(window.origin + `/api/blogs/getblog?slug=${slug}`)
        .then((response) => response.json())
        .then((parsed) => {
          setBlogData(parsed);
          setLikes(parsed.likes);
          setDislikes(parsed.dislikes);
          setComments(parsed.comments);
        })
        .catch((error) => {
          console.error(`Error fetching Blog with slug ${slug}:`, error);
        });
    }
  }, [slug]);

  const handleLike = () => {
    setLikes(likes + 1);
    updateBlogData({ likes: likes + 1 });
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
    updateBlogData({ dislikes: dislikes + 1 });
  };

  const handleComment = () => {
    const newComment = {
      user: "John Doe",
      content: comment,
      timestamp: new Date().toISOString(),
    };

    setComments([...comments, newComment]);
    setComment("");

    updateBlogData({ comments: [...comments, newComment] });
  };

  const updateBlogData = async (data) => {
    const { slug } = router.query;
    const apiUrl = `/api/blogs/${slug}`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("Failed to update blog data:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating blog data:", error.message);
    }
  

    // You can send a request to update the comments on the server here
  };

  return (
    <Layout>
      <div className={styles.container}>
        {blogData ? (
          <div className={styles.blogContent}>
            <div className={styles.blogHeader}>
              <h1 className={styles.blogTitle}>{blogData.title}</h1>
              <p className={styles.blogMeta}>
                By {blogData.author} | {blogData.date}
              </p>
            </div>
            {blogData.coverImage && (
              <div className={styles.coverImage}>
                <img src={blogData.coverImage} alt={blogData.title} />
              </div>
            )}
            {blogData.sections.map((section, index) => (
              <div key={index} className={styles.blogSection}>
                <h2>{section.heading}</h2>
                <p>{section.content}</p>
              </div>
            ))}
            <p onClick={() => router.back()} className={styles.backLink}>
              &#8592; Back to Blogs
            </p>

            {/* Like, Dislike, and Comment Section */}
            <div className={styles.likeDislikeSection}>
              <button className={styles.likeDislikeBtn} onClick={handleLike}>
                Like ({likes})
              </button>
              <button className={styles.likeDislikeBtn} onClick={handleDislike}>
                Dislike ({dislikes})
              </button>
            </div>

            <div className={styles.commentSection}>
              <h2>Comments</h2>
              <ul className={styles.commentsList}>
                {comments.map((c, index) => (
                  <li key={index} className={styles.commentItem}>
                    <strong>{c.user}:</strong> {c.content}
                  </li>
                ))}
              </ul>
              <textarea
                rows="4"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className={styles.commentTextarea}
              ></textarea>
              <button
                onClick={handleComment}
                className={styles.postCommentBtn}
              >
                Post Comment
              </button>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
};

export default Blog;
