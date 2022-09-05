import React from 'react'
import './FeaturedMovie.css';

function FeaturedMovie({film}) {
    let genres = []
    film.genres.forEach((genre) => {
        genres.push(genre.name)
    })

  return (
    <section className='featured' style={{
        backgroundSize : "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${film.backdrop_path})`,
        backgroundPosition: 'center'
    }}>
        <div className='featured--vertical'>
            <div className='featured--horizontal'>
                <div className='featured--name'>{film. title}</div>
                <div className='featured--info'>
                    <div className='featured--points'>{film.vote_average}</div>
                    <div className='featured--year'>{film.release_date}</div>
                </div>
            <div className='featured--description'>{film.overview}</div>
            <div className='featured--button'>
                <a href="/" className='featured--watchbutton'>Lecture</a>
                <a href="/" className='featured--moreinfobutton'>Plus d'info</a>
            </div>
            <div className='featured--genres'>Genres : {genres.join(", ")}</div>
            </div>
        </div>

    </section>
  )
}

export default FeaturedMovie