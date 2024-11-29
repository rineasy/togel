import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ title, excerpt, slug, date, image }) => {
  return (
    <article className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300" itemScope itemType="https://schema.org/BlogPosting">
      {image && (
        <Link to={`/blog/${slug}`}>
          <figure>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-48 object-cover hover:opacity-90 transition-opacity duration-300"
              itemProp="image" 
            />
          </figure>
        </Link>
      )}
      <div className="card-body">
        <Link to={`/blog/${slug}`}>
          <h2 className="card-title hover:text-primary transition-colors" itemProp="headline">{title}</h2>
        </Link>
        <time 
          dateTime={new Date(date).toISOString()} 
          itemProp="datePublished" 
          className="text-sm text-gray-500"
        >
          {new Date(date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <p itemProp="description" className="text-gray-400">{excerpt}</p>
        <div className="card-actions justify-end">
          <Link 
            to={`/blog/${slug}`} 
            className="btn btn-primary btn-sm hover:btn-secondary transition-all duration-300"
            itemProp="url"
          >
            Baca Selengkapnya
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
