import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ post, className, size }) =>
    <Link
      {...className}
      to={`/post/${post.slug}`}
      key={post.title}
      style={{
        backgroundImage: `url(${post.imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="post-info">
        <h3>{post.title}</h3>
        <h4>{post.date}</h4>

      </div>
    </Link>

Card.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired
  }).isRequired,
  className: PropTypes.shape({
    className: PropTypes.string
  }).isRequired,
  size: PropTypes.string.isRequired
};

export default Card;