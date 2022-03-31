import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Selections = ({ data }) => {
  const { results, loading, error } = data;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const get30 = () => results.filter((result) => result.title.length <= 30);
  const get100 = () => results.filter((result) => result.title.length > 30);

  return (
    <section>
      <h1>Nested Routes</h1>
      <Link to='titles30' state={get30()}>
        Title 30
      </Link>
      <Link to='titles100' state={get100()}>
        Title 100
      </Link>
      <Outlet />
    </section>
  );
};

export default Selections;
