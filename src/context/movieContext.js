import { useReducer } from "react";
import { createContext } from "react";
import MovieReducer from "./../reducer/MovieReducer";

export const MovieContext = createContext({});

const ProvideContext = ({ child }) => {
  const [state, dispatch] = useReducer(MovieReducer, {
    movies: [],
    watched: [],
    watchLater: [],
  });

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {child}
    </MovieContext.Provider>
  );
};

export default ProvideContext;
