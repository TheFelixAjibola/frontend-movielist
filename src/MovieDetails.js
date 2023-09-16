import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch"; // Import the custom useFetch hook

const MovieDetails = () => {
  const { id } = useParams();
  const apiKey = "f8d7328efe66061666afa56ddd0ddcbd";

  // Construct the API URLs for fetching movie details and videos
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const videosUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;

  // Use the useFetch hook to fetch movie details and videos
  const { data: movieDetails, isPending, error } = useFetch(movieDetailsUrl);
  const { data: videos } = useFetch(videosUrl);

  // State to store the selected video key
  const [selectedVideoKey, setSelectedVideoKey] = useState(null);

  useEffect(() => {
    // Set the selected video key to the first available video (if any)
    if (videos && videos.results.length > 0) {
      setSelectedVideoKey(videos.results[0].key);
    }
  }, [videos]);

  return (
    <div className="movie-details">
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movieDetails && (
        <>
          <h2 data-testid="movie-title">{movieDetails.title}</h2>
          {selectedVideoKey && (
            <div className="movie-video">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${selectedVideoKey}`}
                title="Movie Trailer"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <div className="movie-details-content">
            <div className="movie-info">
              <p data-testid="movie-release-date">
                <strong>Release Date:</strong> {movieDetails.release_date}
              </p>
              <p data-testid="movie-runtime">
                <strong>Runtime:</strong> {movieDetails.runtime} minutes
              </p>
              <p data-testid="movie-overview">
                <strong>Overview:</strong> {movieDetails.overview}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
