export function toAllMovies(responseData) {
  const { limit } = responseData;

  return {
    limit,
    docs: responseData.docs.map((item) => {
      return {
        id: item.id,
        poster: item.poster,
        genres: item.genres,
        rating: item.rating,
        name: item.name,
        shortDescription: item.shortDescription,
        year: item.year,
        actors: item.name,
        persons: item.persons,
        countries: item.countries,
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
