import { MovieContext } from "../contexts/MoviesProvider";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search"
import styles from "../css/HomePage.module.css";

const Home = () => {
	const { movies, fetchAllMovies } = useContext(MovieContext);

	useEffect(() => {
		fetchAllMovies();
	}, []);

	const renderMovies = () => {
		return movies.map((movie, i) => (
			<Link to={`/movie/${movie._id}`} key={i} className={styles.card}>
				<img src={movie.poster} className={styles.img} alt={movie.title} />
			</Link>
		));
	};

	return (
		<div className={styles.container}>
      <Search />
			<div className={styles.cardWrapper}>{movies && renderMovies()}</div>
		</div>
	);
};

export default Home;
