import React from 'react';
import { Link } from 'react-router-dom';

const Photos = ({ data }) => {
  const { results, loading, error } = data;

  if (loading)
    return (
      <section>
        <p>Loading...</p>
      </section>
    );

  if (error) return <p>{error}</p>;

  const photoList = results.map((photo) => (
    <li key={photo.id}>
      <Link to={`/photo-detail/${photo.id}`}>
        <p>{photo.title}</p>
      </Link>
    </li>
  ));

  return <section>{photoList}</section>;
};

export default Photos;
