import {Component} from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MoviesSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(item => item.categoryId === 'ACTION')
    const comedyMovies = moviesList.filter(item => item.categoryId === 'COMEDY')
    const settings = {
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 2,
    }
    return (
      <div className="bg-container">
        <img
          className="prime-image"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
        <h1>Action Movies</h1>
        <Slider {...settings}>
          <MoviesSlider movieDetails={actionMovies} />
        </Slider>
        <h1>Comedy Movies</h1>
        <Slider {...settings}>
          <MoviesSlider movieDetails={comedyMovies} />
        </Slider>
      </div>
    )
  }
}
export default PrimeVideo
