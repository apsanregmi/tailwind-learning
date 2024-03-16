import React from 'react';
import PropTypes from 'prop-types';
import { format, isValid } from 'date-fns';
import styles from './BlogCard.module.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const BlogCard = ({ title, introduction, author, publishedDate, coverImage }) => {

  console.log('Hello this is coverimage ', coverImage);
  const formattedDate = isValid(new Date(publishedDate))
    ? format(new Date(publishedDate), 'MMMM d, yyyy')
    : '';

  // Slice the introduction to 200 words
  const slicedIntroduction =
    introduction && typeof introduction === 'string'
      ? introduction.split(' ').slice(0, 200).join(' ')
      : introduction;

  return (
    <Card className={styles.card}>
      {/* Render CardMedia only if coverImage has a url */}
      
        <CardMedia
          component="img"
          height="140"
          image={coverImage.url}
          alt={coverImage.description || "Blog cover image"}
        />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {slicedIntroduction}
        </Typography>
      </CardContent>
      <CardActions>
        <div className={styles.metadata}>
          <p className={styles.author}> - {author}</p>
          <br />
          {formattedDate && (
            <time className={styles.publishedDate}>Date: {formattedDate}</time>
          )}
        </div>
      </CardActions>
    </Card>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  introduction: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  coverImage: PropTypes.shape({
    fields: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default BlogCard;
