import React, {useEffect, useState} from 'react';
import axios from "axios";

const getMovies = async  () => {

    const movies = await axios.get("http://localhost:8080/demo/rank")

    return movies.data

}

const container = {
    display: 'flex',
    listStyle: 'none',
    flexWrap:'wrap',
}

const Movies = () => {

    const [movies, setMovies]  = useState([])

    useEffect(() => {
        getMovies().then(data => {
            console.log(data)
            setMovies(data)
        })
    })

    const movieList = movies.map( movie => <li key={movie.mno}>
        <a href={`/reviews/list/${movie.mno}`}><img src={movie.poster}/></a>
    </li>)

    return (
        <div>
            <h1>Movies Page</h1>
            <ul style={container}>
                {movieList}
            </ul>
        </div>
    );
};

export default Movies;