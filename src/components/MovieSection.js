import React from 'react'
import './MovieSection.css'

function MovieSection({title, results}) {
  return (
    <div className="movieRow">
        <h2>{title}</h2>
        <div className='movieRow--left'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </div>

        <div className='movieRow--right'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>
        <div className="movieRow--listarea">
            <div className='movieRow--list'>
                {results.length > 0 &&
                 results.map((item, key) => (
                    <div key={key} className="movieRow--item">
                        <img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default MovieSection