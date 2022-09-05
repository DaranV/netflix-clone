import { useEffect, useState } from 'react';
import ApiMovie from './ApiMovie';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import MovieSection from './components/MovieSection';
import Header from './components/Header';

function App() {
  const [moviesList, setMoviesList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(()=> {
    const loadAllMovies = async () => {
      let list = await ApiMovie.getHomeMovies()
      setMoviesList(list)

    // Film à l'affiche
    let originals = list.filter((oneMovie) => oneMovie.slug === "top-rated")

    let chooseRandomMovie = Math.floor(
      Math.random() * (originals[0].items.results.length -1)
    )

    let chosen = originals[0].items.results[chooseRandomMovie]
    let chosenInfo = await ApiMovie.getMovieInfo(chosen.id, "movie")
    console.log(chosenInfo)
    setFeaturedData(chosenInfo)
  }
    loadAllMovies()
  }, [])

  return (
    <div className="container">
      <Header />
      {featuredData && <FeaturedMovie film={featuredData} />}
      <section className='list'>
        {
          moviesList.map((item, key) => ( 
            <MovieSection key={key} title={item.title} results={item.items.results}/>
          ))
        }
      </section>
    </div>
  );
}

export default App;
