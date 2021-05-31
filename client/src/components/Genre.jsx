import { useContext, useState, useEffect } from "react";
import { MovieContext } from "../contexts/MoviesProvider";
import Items from "./Items"

const Genre = () => {
	const { setGenre, movies } = useContext(MovieContext);
	const [items, setItems] = useState("");

	useEffect(() => {
		if (movies) {
			getItemsFromAllMovies();
		}
    return () => {
      setGenre("");
    };
	}, [movies]);

	const getItemsFromAllMovies = () => {
		let values = movies.map((movie) => movie.genres);
		let result = [];
		values.forEach((value) => {
			result = result.concat(value);
		});
		setItems([...new Set(result)]);
	};
  

	return <Items setVal={ setGenre } name={"genres"} items={items}/>
};

export default Genre;