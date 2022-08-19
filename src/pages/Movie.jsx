import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const OMBDB_API_URL = "https://www.omdbapi.com/";
// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "73539400";

const Movie = () => {
    const [movieData, setMovieData] = useState({})
    const { movieId } = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`${OMBDB_API_URL}?apikey=${API_KEY}&i=${movieId}&plot=full`)
            .then((response) => response.json())
            .then((data) => {
                setMovieData(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    return (

        <div>
            <div className='center-align' style={{ height: '95vh', display: 'flex', alignItems: 'center', justifyContent: 'space-even', flexDirection: 'column' }}>
                <div className="row">
                    <div className="col s22 m22">
                        <div className="card blue-grey darken-1">
                            <img src={movieData.Poster} alt="" />
                            <div className="card-content white-text">
                                <span className="card-title">{movieData.Title}</span>
                                <p>{movieData.Plot}</p>
                                <div style={{ marginTop: '100px' }}>
                                    <p>Title: {movieData.Title}</p>
                                    <p>Genre: {movieData.Genre}</p>
                                    <p>Director: {movieData.Director}</p>
                                    <p>Rating: {movieData.imdbRating}</p>
                                    <p>Year: {movieData.Year}</p>
                                    <p>Runtime: {movieData.Runtime}</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <button className="waves-effect waves-light btn btn-small" onClick={() => navigate(-1)} >Back</button>

            </div>
        </div>


    )
}

export default Movie