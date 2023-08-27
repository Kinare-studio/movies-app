export function toAllMovies(responseData) {
  const { limit } = responseData;

  return {
    limit,
    docs: responseData.docs.map((item) => {
      return {
        id: item.id,
        poster: item.poster,
        rating: item.rating,
        name: item.name,
        year: item.year,
      };
    }),
  };
}

export function toMovieById(responseData) {
  const {
    id,
    poster,
    backdrop,
    rating,
    votes,
    name,
    shortDescription,
    year,
    description,
    budget,
    genres,
    persons,
    countries,
  } = responseData;

  const actors = persons.filter((person) => person.profession === "актеры");

  const directors = persons.filter(
    (person) => person.profession === "режиссеры",
  );

  return {
    id,
    poster,
    backdrop,
    rating,
    votes,
    name,
    shortDescription,
    year,
    description,
    budget,
    genres,
    actors,
    directors,
    countries,
  };
}

export function toMovieByQuery(responseData) {
  const { limit } = responseData;

  return {
    limit,
    docs: responseData.docs.map((item) => {
      return {
        id: item.id,
        poster: item.poster,
        rating: item.rating,
        name: item.name,
        year: item.year,
      };
    }),
  };
}
