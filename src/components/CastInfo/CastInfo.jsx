// import PropTypes from 'prop-types';

const URL = 'https://image.tmdb.org/t/p/w200/';

const CastInfo = ({ data }) => {
  return (
    <>
      <ul>
        {data.map(({ id, profile_path, name, character }) => {
          return (
            <li key={id}>
              <img src={URL + profile_path} alt={name} />

              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CastInfo;
