import MovieItem from '../MovieItem'

const MoviesSilder = props => {
  const {movieDetails} = props

  return (
    <>
      {movieDetails.map(item => (
        <MovieItem
          thumbnail={item.thumbnailUrl}
          video={item.videoUrl}
          key={item.thumbnail}
        />
      ))}
    </>
  )
}
export default MoviesSilder
