const ReviewsInfo = ({ data }) => {
  return (
    <>
      <ul>
        {data.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ReviewsInfo;
