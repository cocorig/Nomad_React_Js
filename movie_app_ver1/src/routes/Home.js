import React, { Component } from 'react';
import Movie from '../components/Movie';
import axios from 'axios';
import './Home.css';

class Home extends Component {
  
  state = {
    isLoading : true,
    movies : [],
  }

  getMovies = async ()=>{ //너는 이걸 기다려야해
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies , isLoading : false});  
    console.log(this.state)
  }
  componentDidMount(){ //컴포넌트가 처음 렌더링될때 호출됨,api로 부터 data가 feching이 완료되면 
   this.getMovies();
  
  }
  render() {
    const {isLoading , movies} = this.state;
    return (
      <section className = "container">
        {isLoading ?   (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ):(

          <div className='movies'>
              {movies.map(movies=>(
                <Movie key={movies.id} 
                id= {movies.id}
                year={movies.year}
                title={movies.title} 
                summary={movies.summary}
                poster={movies.medium_cover_image}
                genres={movies.genres}
            />
            ))}
          </div>
          )}

      </section>
        );
      }
    }
export default Home;

//this.state.isLoading => const { isLoading } = this.state;
//async await을 하는 것은 기본적으로 js에게 getMovies함수에게 조금 시간이 필요하고 그걸 기다려야한다고 말하는것/