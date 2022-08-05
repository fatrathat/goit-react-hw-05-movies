const MovieInfo = ({ data }) => {
  const { poster_path, title, vote_average, overview, genres } = data;

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>User Score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default MovieInfo;
