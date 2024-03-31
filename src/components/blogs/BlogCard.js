import React from 'react';
import PropTypes from 'prop-types';
import { format, isValid } from 'date-fns';

const BlogCard = ({ title, introduction, author, publishedDate, coverImage }) => {
  // console.log('Hello this is coverimage ', coverImage);
  const formattedDate = isValid(new Date(publishedDate))
    ? format(new Date(publishedDate), 'MMMM d, yyyy')
    : '';

  // Slice the introduction to 200 words
  const slicedIntroduction =
    introduction && typeof introduction === 'string'
      ? introduction.split(' ').slice(0, 200).join(' ')
      : introduction;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-70">
      {coverImage.url && (
        <img className="w-full h-32 object-cover" src={coverImage.url} alt={coverImage.description || 'Blog cover image'} />
      )}
      <div className="px-6 py-4">
        <div className=" text-black text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{slicedIntroduction}</p>
      </div>
      <div className="px-6 pt-1 pb-4">
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm">- {author}</p>
          {formattedDate && <time className="text-gray-600 text-sm">Date: {formattedDate}</time>}
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  introduction: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  coverImage: PropTypes.shape({
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};

export default BlogCard;
