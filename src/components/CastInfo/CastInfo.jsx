// import PropTypes from 'prop-types';

import def_img from '../../images/photo.jpg';

const URL = 'https://image.tmdb.org/t/p/w200/';

const CastInfo = ({ data }) => {
  return (
    <>
      <ul>
        {data.map(({ id, profile_path, name, character }) => {
          return (
            <li key={id}>
              <img
                src={profile_path ? URL + profile_path : def_img}
                alt={name}
              />

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
