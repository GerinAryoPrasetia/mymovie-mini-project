import React from 'react'
import movie1 from '../img/movie1.png'
import movie2 from '../img/movie2.png'
import movie3 from '../img/movie3.png'
import movie4 from '../img/movie4.png'

const GenreCard2 = () => {
    return (
        <div>
            <div className="card-genre-one">
                <div className="genre-name-one">
                    <h1>DRAMA</h1>
                    <p>People will always cry watching drama</p>
                    <button>See All</button>
                </div>
                <div className="movie-list-one">
                    <div className="movie-details-one">
                        <img src={movie1} alt="" />
                        <p className="movie-title-one">Iron Man (2020)</p>
                        <p className="movie-genre-one">Action</p>
                    </div>
                    <div className="movie-details-one">
                        <img src={movie2} alt="" />
                        <p className="movie-title-one">Iron Man (2020)</p>
                        <p className="movie-genre-one">Action</p>
                    </div>
                    <div className="movie-details-one">
                        <img src={movie3} alt="" />
                        <p className="movie-title-one">Iron Man (2020)</p>
                        <p className="movie-genre-one">Action</p>
                    </div>
                    <div className="movie-details-one">
                        <img src={movie4} alt="" />
                        <p className="movie-title-one">Iron Man (2020)</p>
                        <p className="movie-genre-one">Action</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default GenreCard2