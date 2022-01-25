const fetchStarWars = async () => {
  const RETURNED_OBJ = {
    data: {},
    error: '',
  };

  try {
    const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const response = await request.json();

    return {
      ...RETURNED_OBJ,
      data: response,
    };
  } catch (err) {
    return {
      ...RETURNED_OBJ,
      error: err,
    };
  }
};

export default fetchStarWars;
