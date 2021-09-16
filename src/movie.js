import React from "react";
import PropTypes from "prop-types";

// state 가 필요없어서 function형으로 작성

function Movie({ id, year, title, summary, poster }) {
  return <h5>{title}</h5>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
export default Movie;
